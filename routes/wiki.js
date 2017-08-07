const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const models = require('../models');
const Page = models.Page; 
const User = models.User;

router.get('/', function(req, res){
	res.redirect('/');
})

router.get('/add', function(req, res){
	res.render('addpage');
})

router.post('/', function(req, res){
	var page = Page.build({
		title : req.body.title,
		content: req.body.content,
		urlTitle : 'localhost:3000/wiki/' + req.body.title
	});
	page.save()
	.then( function() {
		res.redirect('/');
	});
})

module.exports = router;