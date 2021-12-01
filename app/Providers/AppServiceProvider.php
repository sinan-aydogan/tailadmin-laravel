<?php

namespace App\Providers;


use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

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

        /*Search Macro for Backend Table Component*/
        Builder::macro('tableSearch', function ($request){
            $obj = (object) $request;
            $perPage;
            $searchText;
            (isset($obj->perPage)) ? $perPage=$obj->perPage : $perPage = 15;
            (isset($obj->searchText)) ? $searchText=$obj->searchText : $searchText = "";

            return $this->
            when($searchText, function ($query, $searchText)use($obj){
                foreach ($obj->simpleSearchQuery as $field) {
                    $query->orWhere($field, 'like', '%' . $searchText . '%');
                }
                return $query;
            })->paginate($perPage);
        });
    }
}
