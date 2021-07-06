const store = require('../../../store/mysql');
const ctrl = require('./controller');

// el controlador que era un objeto se convierte en una función y le injectamos el Store
module.exports = ctrl(store);