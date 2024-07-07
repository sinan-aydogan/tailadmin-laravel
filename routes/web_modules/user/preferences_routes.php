<?php

use App\Actions\TailAdmin\UpdateDarkModePreference;
use App\Actions\TailAdmin\UpdateUserLanguage;
use Illuminate\Support\Facades\Route;

Route::put('preferred-language', [UpdateUserLanguage::class, 'update'])->name('preferred-language.update');
Route::put('dark-mode', [UpdateDarkModePreference::class, 'update'])->name('dark-mode-preference.update');
