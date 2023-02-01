const { src, dest, watch, parallel, series } = require("gulp");
const webpack = require("webpack");
const webpackStream = require("webpack-stream");
const webpackConfig = require("./webpack.config.js");
const plumber = require("gulp-plumber");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");

exports.js = async function js() {
  return src("./app/js/scripts/app.js")
    .pipe(plumber()) // Обработчик ошибок
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("./dist/js"));
};
