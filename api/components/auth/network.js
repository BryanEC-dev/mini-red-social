const express = require('express');
const router = express.Router();

const response = require('../../../network/response');
const Controller = require('./index');

router.post('/login', function (req, res) {
    console.log("login network");
    const list = Controller.login(req.body.username, req.body.password)
        .then( (user) => {
            response.success(req, res, user, 200);
        })
        .catch( (err) => {
            response.error(req, res, err, 500);
        })
    
})


module.exports = router;