const express = require('express');
const config = require("../config.js")
const user = require('./components/user/network')
const auth = require('./components/auth/network');
const post = require('./components/post/network');
const swaggerUi = require('swagger-ui-express')
const errors = require('../network/errors')

const swaggerDocument = require('./swagger.json');
// creamos el servidor con express
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes 
app.use('/api/user', user)
app.use('/api/auth', auth)
app.use('/api/post', post)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(errors)

// escuche por el puerto configurado

app.listen(config.api.port, () => {
    console.log("api escuchando en el puerto",config.api.port );
})