// Подключаем Browsersync
const browserSync = require("browser-sync").create();
const gulp = require("gulp");
// Определяем логику работы Browsersync
async function browsersync() {
  browserSync.init({
    // Инициализация Browsersync
    server: { baseDir: "dist/" }, // Указываем папку сервера
    notify: true, // Отключаем уведомления
    online: true, // Режим работы: true или false
    watch: true,
    logConnections: true,
  });
}

module.exports = browsersync;
