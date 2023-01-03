const {watch, parallel, series} = require('gulp');
module.exports = function watching() {
    watch('./app/html/**/*.+(html)', series('pages', 'reload'));
    watch('./app/scss/**/*.+(scss)', series('styles'));
    watch('./app/js/**/*.+(js)', series('js'));
    watch('./app/fonts/src/', series('fontsConvert'));
    watch('./app/fonts/fonts/**/*', series('fonts'));
    watch('./app/images/src/**/*', series('images'));
}
  