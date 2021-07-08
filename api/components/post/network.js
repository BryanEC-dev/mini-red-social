const express = require('express');
const router = express.Router();
const secure = require('./secure');
const response = require('../../../network/response');
const Controller = require('./index')


router.get('/',list);



function list(req, res, next) {
    Controller.list()
    .then(data => {
        response.success(req,res,data,200)
    })
    .catch(next)
}



module.exports = router;