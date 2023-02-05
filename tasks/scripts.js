const { src, dest } = require('gulp')
const webpack = require('webpack')
const webpackStream = require('webpack-stream')
const plumber = require('gulp-plumber')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const order = require('gulp-order')
const concat = require('gulp-concat')
const webpackConfig = require('./webpack.config')

exports.js = async function js() {
    return src('./app/js/scripts/app.js')
        .pipe(plumber()) // Обработчик ошибок
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('./dist/js'))
}

exports.corejs = async function corejs() {
    return src('./app/js/resourses/*.+(js)') // директория откуда брать исходники
        .pipe(
            order([
                'jquery-3.2.1.min.js',
                'popper.min.js',
                'bootstrap.min.js',
                'owl.carousel.min.js',
                'jquery.waypoints.min.js',
                'main.js',
            ])
        ) // Порядок добавления файлов в общий файл
        .pipe(concat('core.js')) // объеденим все js-файлы в один
        .pipe(uglify()) // вызов плагина uglify - сжатие кода
        .pipe(rename({ suffix: '.min' })) // вызов плагина rename - переименование файла с приставкой .min
        .pipe(dest('./dist/js')) // директория продакшена, т.е. куда сложить готовый файл
}
