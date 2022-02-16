<?php

namespace App\Providers;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Env;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //Max key length error fix
        Schema::defaultStringLength(191);

        //Shared Variables
        Inertia::share([
            'errors' => function () {
                return Session::get('errors')
                    ? Session::get('errors')->getBag('default')->getMessages()
                    : (object)[];
            },
            'lang' => function () {
                return Session::get('locale');
            },
            'project_info' => function () {
                return Env::get('APP_NAME');
            },
            'roles' => function () {
                if (Auth::check()) {
                    return Auth::user()->getRoleNames();
                } else {
                    return [];
                }
            },
            'permissions' => function () {
                if (Auth::check()) {
                    return Auth::user()->getAllPermissions();
                } else {
                    return [];
                }
            }
        ]);

        Inertia::share('flash', function () {
            return [
                'message' => Session::get('message'),
            ];
        });

        /*Search Macro for Backend Table Component*/
        Builder::macro('tableSearch', function ($request) {
            $request = (object)$request;
            $perPage = (isset($request->perPage)) ? $request->perPage : 5;

            if (key($request)) {

                $searchValue = (object)$request->searchValue;

                if ($request->searchType === "simple") {


                    /*Simple Search*/
                    $searchQuery = $this->when($searchValue->simpleSearchText, function ($query) use ($searchValue) {
                        foreach ($searchValue->simpleSearchFields as $field) {
                            $query->orWhere($field, 'like', '%' . $searchValue->simpleSearchText . '%');
                        }
                    });

                } else {

                    /*Compare Commands*/
                    function compareCondition($condition, $searchValue): array
                    {

                        $searchQuery = [];

                        switch ($condition) {

                            case 'contains' :
                                $searchQuery['condition'] = 'like';
                                $searchQuery['value'] = "%" . $searchValue . "%";
                                break;

                            case 'notContains' :
                                $searchQuery['condition'] = 'not like';
                                $searchQuery['value'] = "%" . $searchValue . "%";
                                break;

                            case 'starts' :
                                $searchQuery['condition'] = 'like';
                                $searchQuery['value'] = $searchValue . "%";
                                break;

                            case 'ends' :
                                $searchQuery['condition'] = 'like';
                                $searchQuery['value'] = "%" . $searchValue;
                                break;

                            case '>' :
                                $searchQuery['condition'] = '>';
                                $searchQuery['value'] = $searchValue;
                                break;

                            case '>=' :
                                $searchQuery['condition'] = '>=';
                                $searchQuery['value'] = $searchValue;
                                break;

                            case '<' :
                                $searchQuery['condition'] = '<';
                                $searchQuery['value'] = $searchValue;
                                break;

                            case '<=' :

                                $searchQuery['condition'] = '<=';
                                $searchQuery['value'] = $searchValue;
                                break;

                            case 'between' :

                                $searchQuery['condition'] = 'between';
                                $searchQuery['value'] = [$searchValue['from'], $searchValue['to']];
                                break;

                            default:

                                $searchQuery['condition'] = '=';
                                $searchQuery['value'] = $searchValue;
                        }

                        return $searchQuery;
                    }

                    /*Advanced Search*/
                    foreach ($searchValue as $key => $value) {

                        $field = compareCondition($value['condition'], $value['value']);

                        if ($value['condition'] === "between") {
                            $whenTrigger = $value['value']['from'] !== null || $value['value']['to'] !== null;
                        } else {
                            $whenTrigger = isset($value['value']);
                        }

                        $searchQuery = $this->when($whenTrigger, function ($query) use ($key, $field, $value) {
                            if ($value['condition'] === "between") {
                                $query->whereBetween($key, $field['value']);
                            } else {
                                $query->where($key, $field['condition'], $field['value']);
                            }
                        });

                    }

                }

                /*Order Function*/
                if($request->sortDirection){
                    $sortDirection = 'desc';
                }else{
                    $sortDirection = 'asc';
                }

                if($request->sortKey){
                    $searchQuery->orderBy($request->sortKey, $sortDirection);
                }

            } else {
                $searchQuery = $this;
            }




            return $searchQuery->paginate($perPage);
        });

        /*Get Related Data*/
        Builder::macro('getRelatedData', function ($key, $table) {
            return $this->whereIn('id', function ($query) use ($key, $table) {
                $query->select($key)
                    ->from($table)
                    ->distinct();
            });
        }
        );
    }
}
