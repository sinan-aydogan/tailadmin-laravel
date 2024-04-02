<?php

use Illuminate\Translation\TranslationServiceProvider as BaseTranslationServiceProvider;
use LaravelLang\JsonFallback\TranslationServiceProvider as JsonTranslationServiceProvider;

return [
    App\Providers\AppServiceProvider::class,
    App\Providers\FortifyServiceProvider::class,
    App\Providers\JetstreamServiceProvider::class,
    BaseTranslationServiceProvider::class => JsonTranslationServiceProvider::class,

];
