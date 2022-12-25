const gulp = require('gulp');
const { src, dest, parallel, series, watch } = require('gulp');
// Для доступа к папке с тасками. Чтоб не подключать каждый отдельный файл с таском
const requireDir = require('require-dir');
const { browsersync } = require('./tasks/browsersync');
const tasks = requireDir('./tasks');

//tasks.hello и tasks.browsersync это файлы с функциями и после идет название экспортируемой функции
exports.start = tasks.hello;
exports.browsersync = tasks.browsersync;
exports.pages = tasks.html;
exports.watching = tasks.watch;

exports.reload = async () => {
    await exports.browsersync.reload
}

exports.default = parallel(
    exports.start,
    exports.pages,
    exports.browsersync.browsersync,
    exports.browsersync.reload,
    exports.watching,
)
