const {watch, parallel, series} = require('gulp');
module.exports = function watching() {
    watch('app/html/**/*.+(html)', series('pages', 'reload'));
}
  