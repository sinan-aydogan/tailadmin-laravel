<?php

declare(strict_types=1);

namespace App\Actions\TailAdmin;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\In;

final class UpdateUserLanguage
{
    /**
     * Supported language codes in the application.
     */
    private const SUPPORTED_LANGUAGES = [
       'bg', 'de', 'en', 'fr', 'ru', 'tr', 'zh_CN'
    ];

    /**
     * Validate and update the authenticated user's preferred language.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request): void
    {
        $validated = $request->validateWithBag('updatePreferredLanguage', [
            'language' => [
                'required',
                'string',
                'max:5',
                new In(self::SUPPORTED_LANGUAGES)
            ],
        ]);

        /** @var User $user */
        $user = Auth::user();

        $user->update([
            'language' => $validated['language'],
        ]);

        $this->setApplicationLocale($validated['language'], $request);
    }

    /**
     * Set the application and Carbon locale.
     */
    private function setApplicationLocale(string $language, Request $request): void
    {
        App::setLocale($language);

        // Set Carbon locale with fallback handling
        $this->setCarbonLocale($language, $request);
    }

    /**
     * Set Carbon locale with proper format and fallback.
     */
    private function setCarbonLocale(string $language, Request $request): void
    {
        try {
            // Get session locale or use language as fallback
            $sessionLocale = $request->session()->get('locale', $language);

            // Format: language_COUNTRY.UTF-8 (e.g., tr_TR.UTF-8)
            $carbonLocale = sprintf(
                '%s_%s.UTF-8',
                $language,
                strtoupper($sessionLocale)
            );

            Carbon::setLocale($carbonLocale);
        } catch (\Exception $e) {
            // Fallback to just language code if full locale fails
            Carbon::setLocale($language);
        }
    }

    /**
     * Get supported language codes.
     *
     * @return array<string>
     */
    public static function getSupportedLanguages(): array
    {
        return self::SUPPORTED_LANGUAGES;
    }

    /**
     * Check if a language is supported.
     */
    public static function isLanguageSupported(string $language): bool
    {
        return in_array($language, self::SUPPORTED_LANGUAGES, true);
    }
}
