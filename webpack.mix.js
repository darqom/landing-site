const mix = require('laravel-mix');

mix.options({
    processCssUrls: false
});

mix.sass('src/scss/style.scss', 'css')
    .copy('src/images', 'dist/images')
    .setPublicPath('dist')

