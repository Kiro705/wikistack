const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const wikiRouter = require('./wiki');
const userRouter = require('./user');

router.use('/wiki', wikiRouter);
router.use('/users', userRouter);

router.get('/', function(req, res, next) {
    res.redirect('/wiki/');
})

module.exports = router;