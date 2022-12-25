// Подключаем Browsersync
const browserSync = require('browser-sync').create();

// Определяем логику работы Browsersync
function browsersync () {
    browserSync.init({ // Инициализация Browsersync
        server: { baseDir: 'dist/' }, // Указываем папку сервера
        notify: false, // Отключаем уведомления
        online: true // Режим работы: true или false
    })
}

async function reload() {
    browserSync.reload;
}
module.exports = {browsersync, reload}; 