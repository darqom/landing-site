const mix = require('laravel-mix');

mix.options({
    processCssUrls: false
});

mix.copy('src/images', 'dist/images')
    .sass('src/scss/style.scss', 'css')
    .js('src/js/app.js', 'js')
    .autoload({
        jquery: ['$', 'window.jQuery', 'jQuery']
    })
    .setPublicPath('dist')

