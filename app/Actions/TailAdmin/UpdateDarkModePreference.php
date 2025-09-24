<?php

declare(strict_types=1);

namespace App\Actions\TailAdmin;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\In;

final class UpdateDarkModePreference
{
    /**
     * Dark mode options available in the application.
     */
    private const DARK_MODE_OPTIONS = ['light', 'dark', 'auto'];

    /**
     * Validate and update the authenticated user's dark mode preference.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request): void
    {
        $validated = $request->validateWithBag('updateDarkModePreference', [
            'dark_mode' => ['required', new In(self::DARK_MODE_OPTIONS)],
        ]);

        /** @var User $user */
        $user = Auth::user();

        $user->update([
            'dark_mode' => $validated['dark_mode'],
        ]);
    }

    /**
     * Get available dark mode options.
     *
     * @return array<string>
     */
    public static function getAvailableOptions(): array
    {
        return self::DARK_MODE_OPTIONS;
    }
}
