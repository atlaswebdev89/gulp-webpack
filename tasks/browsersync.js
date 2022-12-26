// Подключаем Browsersync
const browserSync = require('browser-sync').create();
var gulp        = require("gulp");
// Определяем логику работы Browsersync
function browsersync () {
    browserSync.init({ // Инициализация Browsersync
        server: { baseDir: 'dist/' }, // Указываем папку сервера
        notify: true, // Отключаем уведомления
        online: true // Режим работы: true или false
    })
}

async function reload() {
    browserSync.reload;
}
module.exports = {browsersync, reload}; 