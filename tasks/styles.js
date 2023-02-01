const { src, dest, watch, parallel, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const gcssmq = require("gulp-group-css-media-queries");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const gutil = require("gulp-util");
const gulpif = require("gulp-if");
const debug = require("gulp-debug");
const mode = process.env.MODE;

const styles = async () => {
  return src("./app/scss/styles/*.+(scss)")
    .pipe(gulpif(mode === "dev", sourcemaps.init())) // инициализируем создание Source Maps
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({ grid: true }))
    .pipe(gcssmq())
    .pipe(csso())
    .pipe(debug())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulpif(mode === "dev", sourcemaps.write(".")))
    .pipe(dest("./dist/css/"));
};

module.exports = styles;
