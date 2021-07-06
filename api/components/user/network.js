const express = require('express');
const router = express.Router();

const secure = require('./secure');
const response = require('../../../network/response');
//const controller = require('./controller');
//const Controller = require('./controller')
const Controller = require('./index')


/* / */

router.get('/', function (req, res) {
    console.log("aqui get");
    const list = Controller.list()
        .then( (user) => {
            response.success(req, res, user, 200);
        })
        .catch( (err) => {
            response.error(req, res, err.message, 500);
        })
    
})

router.post('/', function (req, res) {
    const insert = Controller.insert(req.body)
    .then( (user) => {
        response.success(req, res, user, 200);
    })
    .catch( (err) => {
        response.error(req, res, err.message, 500);
    })
})

// TODO : revisar
router.put('/', secure('update'), function (req, res) {
    const update = Controller.update(req.body)
    .then( (user) => {
        response.success(req, res, user, 200);
    })
    .catch( (err) => {
        response.error(req, res, err.message, 500);
    })
})

/* /:id */
router.get('/:id', function (req, res) {
    const list = Controller.get(req.params.id)
    .then( (user) => {
        response.success(req, res, user, 200);
    })
    .catch( (err) => {
        response.error(req, res, err.message, 500);
    })
    
})




router.delete('/:id', function (req, res) {
    console.log("aqui post");
    const remove = Controller.remove(req.body)
    .then( (user) => {
        response.success(req, res, user, 200);
    })
    .catch( (err) => {
        response.error(req, res, err.message, 500);
    })
})

/*  */
router.post('/follow/:id', secure('follow'),  function (req, res, next) {
    console.log(req.user);
    Controller.follow(req.user.data.id, req.params.id)
    .then( data => {
        response.success(req, res, data, 201);
    })
    .catch(next);
})

module.exports = router;