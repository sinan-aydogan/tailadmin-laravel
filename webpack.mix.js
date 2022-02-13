const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js').vue({
    output: {
        chunkFilename: 'js/[name].js?id=[chunkhash]',
    }
})
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-apply'),
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer')
    ])
    .sass('resources/sass/app.scss', 'public/css')
    .webpackConfig(require('./webpack.config'));

if (mix.inProduction()) {
    mix.version();
}
