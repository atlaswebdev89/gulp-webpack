const gulp = require('gulp');
const { src, dest, parallel, series, watch } = require('gulp');
// Для доступа к папке с тасками. Чтоб не подключать каждый отдельный файл с таском
const requireDir = require('require-dir');
const { browsersync } = require('./tasks/browsersync');
const tasks = requireDir('./tasks');

const argv = require('yargs').argv;
/**Dev check*/
const isDev = function(){
    return !argv.prod;
}

/*** Prod check*/
const isProd = function(){
    return !!argv.prod;
}
console.log(isProd());

//tasks.hello и tasks.browsersync это файлы с функциями и после идет название экспортируемой функции
exports.start = tasks.start;
exports.browsersync = tasks.browsersync;
exports.pages = tasks.html;
exports.watching = tasks.watch;
exports.styles = tasks.styles;

exports.clean = tasks.clean;

exports.reload = async () => {
    await exports.browsersync.reload
}

exports.default = series(
    parallel(exports.start, exports.pages,exports.styles),
    parallel(exports.browsersync.browsersync, exports.watching)
);

exports.build = series (exports.clean);
