function err(message, code) {
    let e = new Error(message);

    if (code) {
        
        e.statusCode = code;
    }

    if (message) {
        e.messages = message
    }

    return e;
}

module.exports = err;