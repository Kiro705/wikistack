const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.get('/', function(req, res, next) {
    res.render('index');
    next();
})





module.exports = router;