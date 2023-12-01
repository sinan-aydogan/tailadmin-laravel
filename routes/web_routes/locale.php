<?php
/* Change Lang */

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use LaravelLang\Locales\Facades\Locales;

/**
 * Change locale
 *
 * @param Request $request
 * @param string $locale
 * @return RedirectResponse
 */
Route::get('locale/change/{locale}', function ($locale) {
    // Available languages
    $availableLocales = collect(Locales::available())->pluck('code')->toArray();

    if (array_key_exists($locale, $availableLocales)) {
        app()->setLocale($locale);
    }

    return redirect()->back();

})->name('locale.change');

/**
 * Get available locales
 *
 * @return Collection
 */
Route::get('locale/available', function () {
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
