const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const models = require('../models');
const Page = models.Page; 
const User = models.User;

router.get('/', function(req, res){
	User.findAll({}).then((allUsers) => res.render('users', {users: allUsers}));
});

router.get('/:userId', function(req, res, next) {

  var userPromise = User.findById(req.params.userId);
  var pagesPromise = Page.findAll({
    where: {
      authorId: req.params.userId
    }
  });

  Promise.all([
    userPromise, 
    pagesPromise
  ])
  .then(function(values) {
    res.render('user', { user: values[0], pages: values[1] });
  })
  .catch(next);
});

module.exports = router;