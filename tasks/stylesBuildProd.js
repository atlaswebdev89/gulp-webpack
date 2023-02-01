const { src, dest, watch, parallel, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const gcssmq = require("gulp-group-css-media-queries");
const csso = require("gulp-csso");
const rename = require("gulp-rename");

const stylesProd = async () => {
  return src("./app/scss/styles/*.+(scss)")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({ grid: true }))
    .pipe(gcssmq())
    .pipe(csso())
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("./dist/css/"));
};

module.exports = stylesProd;
