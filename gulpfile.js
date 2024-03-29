// const gulp = require('gulp')
const { parallel, series } = require('gulp')
// Для доступа к папке с тасками. Чтоб не подключать каждый отдельный файл с таском
const requireDir = require('require-dir')

const tasks = requireDir('./tasks')

// const mode = process.env.MODE

// tasks.hello и tasks.browsersync это файлы с функциями и после идет название экспортируемой функции
exports.start = tasks.start
exports.browsersync = tasks.browsersync
exports.pages = tasks.html
exports.watching = tasks.watch
// Для scss своих
module.exports.styles = tasks.styles.styles
// Для css и scss из папки resourses
module.exports.stylescore = tasks.styles.stylescore
// Для обработки модулей js
exports.js = tasks.scripts.js
// Для обработки отдельных файлов js Конкатенация в один файл сжатие и переименнование
exports.jscore = tasks.scripts.corejs
exports.clean = tasks.clean

exports.fonts = tasks.fonts.fonts
exports.fontsConvert = tasks.fonts.fontsConvert
exports.images = tasks.images

// Некоторые таски для сборки в продакшен будут отличаться
exports.productionStyles = tasks.stylesBuildProd
exports.productionStart = tasks.startBuildProd
// ########################################################

// Сборка для developer
exports.default = series(
    exports.clean,
    parallel(
        exports.start,
        exports.pages,
        exports.styles,
        exports.stylescore,
        exports.fontsConvert,
        exports.fonts,
        exports.images
    ),
    exports.js,
    exports.jscore,
    parallel(exports.watching, exports.browsersync)
)

// Сборка для продакшена
exports.build = series(
    exports.start,
    exports.clean,
    exports.pages,
    exports.styles,
    exports.stylescore,
    exports.fontsConvert,
    parallel(exports.fonts, exports.images, exports.js),
    exports.jscore
)
