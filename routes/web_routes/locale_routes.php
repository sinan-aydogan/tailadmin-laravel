<?php
/* Change Lang */

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Collection;
use LaravelLang\Locales\Facades\Locales;

/**
 * Change locale
 *
 * @param Request $request
 * @param string $locale
 * @return RedirectResponse
 */
Route::get('locale/change/{locale}', static function ($locale) {
    // Available languages
    $availableLocales = collect(Locales::available())->pluck('code')->toArray();

    if (array_key_exists($locale, $availableLocales)) {
        app()->setLocale($locale);
    }

    return redirect()->back();

})->name('locale.change');

/**
 * Update user locale
 *
 * @param Request $request
 * @return void
 */

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])
    ->patch('locale/update-user-locale', [\App\Actions\TailAdmin\SetLocale::class, 'update'])
    ->name('locale.update-user-locale');


/**
 * Get available locales
 *
 * @return Collection
 */
Route::get('locale/available', static function () {
    $availableLocales = collect();
    foreach (Locales::installed((bool)$withProtects = true) as $locale) {
        $availableLocales[] =
            [
                'id' => $locale->code,
                'name' => $locale->native
            ];
    }

    return response()->json([
        'availableLocales' => $availableLocales,
    ], 200);

})->name('locale.available');
