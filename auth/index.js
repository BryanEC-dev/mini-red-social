const jwt = require('jsonwebtoken');
const config = require('../config');
const error = require('../utils/error');

const secret = config.jwt.secret;

// genera el token
function sign(data) {
    console.log(data);
    try {
        return jwt.sign(data, secret);
    } catch (error) {
        console.error(error);
        next(error)
    }
   
}

// verifica el token
function verify(token) {
    return jwt.verify(token, secret)
   
}


// chequea el token
const check = {
    own: function(req, owner) {
        const decoded = decodeHeader(req);
        if(decoded.id !== owner){
           throw error("No puedes realizar esta acción",401)
        }

        /* return next(); */
        // comprobar si es o no propio
    },

    logged: function(req) {
        const decoded = decodeHeader(req);
    },
}

function getToken(auth) {
    if (!auth) {
        throw new Error('No viene token');
    }

    if (auth.indexOf('Bearer ') === -1) {
        throw new Error('Formato invalido');
    }

    let token = auth.replace('Bearer ', '');
    return token;
}

function decodeHeader(req) {
    // obtener el header de autorization
    const authorization = req.headers.authorization || '';
    // obtener el token
    const token = getToken(authorization);

    // verificar que el token sea valido
    const decoded = verify(token);

    // la información del usuario
    req.user = decoded;

    return decoded;
}

module.exports = {
    sign,
    check,
};