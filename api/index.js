const express = require('express');
const config = require("../config.js")
const user = require('./components/user/network')
const swaggerUi = require('swagger-ui-express')

const swaggerDocument = require('./swagger.json');
// creamos el servidor con express
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes 
app.use('/api/user', user)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// escuche por el puerto configurado

app.listen(config.api.port, () => {
    console.log("api escuchando en el puerto",config.api.port );
})