const express = require('express')

const config = require('../config')


const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// RUTAS
app.use('/', router)

app.listen(config.mysqlService.port, () => {
    console.log('Servicio de mysql escuchando en el puerto', config.mysqlService.port);
})