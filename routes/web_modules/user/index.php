<?php
/**
 * You can register your routes here.
 **/

use Illuminate\Support\Facades\Route;

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->prefix('user/')->name('user.')->group([
    base_path('routes/web_modules/user/preferences_routes.php')
]);
