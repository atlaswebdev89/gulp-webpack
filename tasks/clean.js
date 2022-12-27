const del = require('del');
async function clean() {
    del.sync('./dist/', { force: true });
}
module.exports = clean;
