const { src, dest, watch, parallel, series } = require("gulp");
const ttf2woff = require("gulp-ttf2woff");
const ttf2woff2 = require("gulp-ttf2woff2");

// Конвертация ttf в woff2
function ttf2woff2Converter() {
  return src("./app/fonts/src/*.+(ttf)")
    .pipe(ttf2woff2())
    .pipe(dest("./app/fonts/fonts/"));
}
// Конвертация ttf в woff
function ttf2woffConverter() {
  return src("./app/fonts/src/*.+(ttf)")
    .pipe(ttf2woff())
    .pipe(dest("./app/fonts/fonts/"));
}

// Коирование шрифтов в папку назначения
function fonts() {
  return src("./app/fonts/fonts/**/*").pipe(dest("./dist/fonts/"));
}

const fontsConvert = series(ttf2woff2Converter, ttf2woffConverter);
module.exports = { fonts, fontsConvert };
