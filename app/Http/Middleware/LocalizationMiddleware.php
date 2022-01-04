<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class LocalizationMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
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
            \Illuminate\Support\Facades\App::setLocale($request->session()->get('locale'));
            \Carbon\Carbon::setLocale($request->session()->get('locale') . '_' . strtoupper($request->session()->get('locale')) . '.UTF-8');
        }
        return $next($request);
    }
}
