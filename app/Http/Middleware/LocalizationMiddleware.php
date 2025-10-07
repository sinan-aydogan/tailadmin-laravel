<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use App\Actions\TailAdmin\UpdateUserLanguage;
use Carbon\Carbon;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Symfony\Component\HttpFoundation\Response;

final class LocalizationMiddleware
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Get session locale if available
        $sessionLocale = $request->session()->get('locale');

        if ($sessionLocale && UpdateUserLanguage::isLanguageSupported($sessionLocale)) {
            $this->setApplicationLocale($sessionLocale, $request);
        }

        return $next($request);
    }

    /**
     * Set the application and Carbon locale.
     */
    private function setApplicationLocale(string $language, Request $request): void
    {
        App::setLocale($language);
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
}

