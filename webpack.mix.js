const mix = require('laravel-mix');

mix.webpackConfig({
    stats: {
        children: true
    }
});

mix.sass('src/scss/style.scss', 'css')
    .copy('src/images', 'dist/images')
    .setPublicPath('dist');

