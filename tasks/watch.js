const {watch, parallel, series} = require('gulp');
const browserSync = require('browser-sync').create();
module.exports = function watching() {
    watch('app/html/**/*.+(html)', series('pages'));
}
  