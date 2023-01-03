const {src, dest, watch, parallel, series} = require('gulp');
const imagemin = require('gulp-imagemin');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const pngquant = require('imagemin-pngquant');
const webp = require('gulp-webp');
const browserSync = require('browser-sync').create();
const del = require('del');

function imageMin(){
    return src("./app/images/src/**/*")
        .pipe(imagemin([

            imageminJpegRecompress({
                progressive: true,
                min: 70, max: 75
            }),

            pngquant({
                speed: 5,
                quality: [0.6, 0.8]
            }),

            imagemin.svgo({
                plugins: [
                        { removeViewBox: false },
                        { removeUnusedNS: false },
                        { removeUselessStrokeAndFill: false },
                        { cleanupIDs: false },
                        { removeComments: true },
                        { removeEmptyAttrs: true },
                        { removeEmptyText: true },
                        { collapseGroups: true }
                ]
            })

        ]))
        .pipe(dest("./app/images/compress/"));
}


async function clean() {
    del.sync('./dist/images/', { force: true });
}
// Конвертируем в webp формат
function webConverter(){
    return src("./app/images/compress/**/*")
        .pipe(webp())
        .pipe(dest("./dist/images/"));
}

const images = series(clean, imageMin, webConverter);
module.exports = images;
