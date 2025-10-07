<?php
/**
 * You can register your routes here.
 **/

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('terms', function () {
    return Inertia::render('TermsOfService');
})->name('terms.show');

Route::get('privacy-policy', function () {
    return Inertia::render('PrivacyPolicy');
})->name('privacy-policy.show');
