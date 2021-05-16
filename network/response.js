/* exports.success = function (req,res,message, status)  {
    let statusCode = status || 200;
    let statusMessage = status || '';
    res.statuss(statusCode).send({
        error: false,
        status: statusCode,
        body: message,
    })
} */

exports.success = function (req, res, message, status) {
    let statusCode = status || 200;
    let statusMessage = message || '';

    res.status(statusCode).send({
        error: false,
        status: statusCode,
        body: statusMessage,
    });
}

exports.error = function (req,res,message, status) {
    let statusCode = status || 500
    let statusMessage = status || 'Internal server error';
    res.status(statusCode).send({
        error: true,
        status: statusCode,
        body: message,
        
    })
}