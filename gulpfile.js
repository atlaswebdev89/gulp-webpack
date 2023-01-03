const gulp = require('gulp');
const { src, dest, parallel, series, watch } = require('gulp');
// Для доступа к папке с тасками. Чтоб не подключать каждый отдельный файл с таском
const requireDir = require('require-dir');
const { browsersync } = require('./tasks/browsersync');
const tasks = requireDir('./tasks');

//tasks.hello и tasks.browsersync это файлы с функциями и после идет название экспортируемой функции
exports.start = tasks.start;
exports.browsersync = tasks.browsersync;
exports.pages = tasks.html;
exports.watching = tasks.watch;
module.exports.styles = tasks.styles;
exports.js = tasks.scripts.js;
exports.clean = tasks.clean;
exports.fonts = tasks.fonts.fonts;
exports.fontsConvert = tasks.fonts.fontsConvert;

exports.images = tasks.images;

exports.reload = async () => {
    await exports.browsersync.reload
}

exports.default = series(
    parallel(exports.start, exports.pages, exports.styles, exports.fontsConvert, exports.fonts, exports.images),
    exports.js,
    parallel(exports.watching, exports.browsersync.browsersync)
);

exports.build = series (exports.clean);
