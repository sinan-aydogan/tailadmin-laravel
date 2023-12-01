<?php

namespace App\Actions\TailAdmin\Profile;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use LaravelLang\Locales\Facades\Locales;

class SetLocale
{
    /**
     * Validate and update the user's locale.
     *
     * @param User $user
     * @param Request $request
     */
    public function update(Request $request): void
    {
        /*Validation*/
        $validated = $request->validate([
            'locale' => [
                'required',
                'string',
                Rule::in(collect(Locales::available())->pluck('code')),
            ],
        ]);

        /*Update*/
        $request->user()->locale = $validated['locale'];
        $request->user()->update();

        /*Set locale*/
        app()->setLocale($validated['locale']);
    }
}
