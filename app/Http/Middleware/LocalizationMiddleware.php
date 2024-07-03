<?php

namespace App\Http\Middleware;

use Carbon\Carbon;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\App;


class LocalizationMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response) $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Available languages
        $availableLangs = [
            'en' => 'en',
            'bg' => 'bg',
            'de' => 'de',
            'fr' => 'fr',
            'ru' => 'ru',
            'tr' => 'tr',
            'zh' => 'zh',
        ];

        // Determinate the language of the session
        if ($request->session()->has('locale')) {
            // Apply the lang of the session to global
            App::setLocale($request->session()->get('locale'));
            Carbon::setLocale($request->session()->get('locale') . '_' . strtoupper($request->session()->get('locale')) . '.UTF-8');
        }

        return $next($request);
    }
}

