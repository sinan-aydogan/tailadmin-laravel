<?php
use Illuminate\Support\Facades\Route;

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group( function () {
    Route::patch('profile/update-locale', [\App\Actions\TailAdmin\Profile\SetLocale::class, 'update'])->name('user-locale.update');
});
