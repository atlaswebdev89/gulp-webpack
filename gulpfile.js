const gulp = require("gulp");
const { src, dest, parallel, series, watch } = require("gulp");
// Для доступа к папке с тасками. Чтоб не подключать каждый отдельный файл с таском
const requireDir = require("require-dir");
const tasks = requireDir("./tasks");

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

// Некоторые таски для сборки в продакшен будут отличаться
exports.productionStyles = tasks.stylesBuildProd;
exports.productionStart = tasks.startBuildProd;
// ########################################################

// Сборка для developer
exports.default = series(
  parallel(
    exports.start,
    exports.pages,
    exports.styles,
    exports.fontsConvert,
    exports.fonts,
    exports.images
  ),
  exports.js,
  parallel(exports.watching, exports.browsersync)
);

// Сборка для продакшена
exports.build = series(
  exports.productionStart,
  exports.clean,
  exports.pages,
  exports.productionStyles,
  exports.fontsConvert,
  parallel(exports.fonts, exports.images, exports.js)
);
