<?php

namespace App\Actions\TailAdmin;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Validator;

class UpdateDarkModePreference
{
    /**
     * Validate and update the given user's language information.
     *
     * @param array<string, mixed> $input
     */
    public function update(Request $request): void
    {
        $validated = $request->validateWithBag('updateDarkModePreference', [
            'dark_mode' => ['required', 'in:light,dark,auto'],
        ]);

        $user = auth()->user();


        $user->dark_mode = $validated['dark_mode'];
        $user->save();
    }
}
