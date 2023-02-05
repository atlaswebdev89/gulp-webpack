const { src, dest } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')
const gcssmq = require('gulp-group-css-media-queries')
const csso = require('gulp-csso')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')
// const gutil = require('gulp-util')
const gulpif = require('gulp-if')
const debug = require('gulp-debug')
const order = require('gulp-order')
const concat = require('gulp-concat')

const mode = process.env.MODE

const styles = async () =>
    src('./app/scss/styles/*.+(scss)')
        .pipe(gulpif(mode === 'dev', sourcemaps.init())) // инициализируем создание Source Maps
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({ grid: true }))
        .pipe(gcssmq())
        .pipe(csso())
        .pipe(debug())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulpif(mode === 'dev', sourcemaps.write('.')))
        .pipe(dest('./dist/css/'))

const stylescore = async () => {
    src([
        './app/scss/resourses/**/*.+(css|scss)',
        './app/scss/font-css/**/*.+(css|scss)',
    ])
        .pipe(gulpif(mode === 'dev', sourcemaps.init())) // инициализируем создание Source Maps
        .pipe(sass().on('error', sass.logError))
        .pipe(
            order([
                'bootstrap.css',
                'animate.css',
                'owl.carousel.min.css',
                'style.css',
            ])
        ) // Порядок добавления файлов в общий файл
        .pipe(concat('core.css'))
        .pipe(autoprefixer({ grid: true }))
        .pipe(gcssmq())
        .pipe(csso())
        .pipe(debug())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulpif(mode === 'dev', sourcemaps.write('.')))
        .pipe(dest('./dist/css/'))
}

module.exports = { styles, stylescore }
