<?php

namespace App\Actions\TailAdmin;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class UpdateUserLanguage
{
    /**
     * Validate and update the given user's language information.
     *
     * @param array<string, mixed> $input
     */
    public function update(Request $request): void
    {
        $validated = $request->validateWithBag('updatePreferredLanguage', [
            'language' => ['required', 'string', 'max:5'],
        ]);

        $user = auth()->user();


        $user->language = $validated['language'];
        $user->save();

        App::setLocale($validated['language']);
        Carbon::setLocale($validated['language'] . '_' . strtoupper($request->session()->get('locale')) . '.UTF-8');
    }
}
