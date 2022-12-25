// Определяем константы Gulp
const { src, dest, parallel, series, watch } = require('gulp');
const bs = require('browser-sync');
const fileinclude = require ('gulp-file-include');

module.exports = function pages() {
    return src('./app/html/pages/**/*.+(html)')
            .pipe(fileinclude({
                    prefix: '@',
                    basepath: '@file'
                })
            )
    .pipe(dest('./dist/'))
    .pipe(bs.stream());
  }
