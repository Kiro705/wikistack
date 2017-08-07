const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const models = require('../models');
const Page = models.Page; 
const User = models.User;

router.get('/', function(req, res){
	Page.findAll({}).then((allPages) => res.render('index', {pages: allPages}));
})

router.get('/add', function(req, res){
	res.render('addpage');
})

router.get('/:url', function(req, res, next) {
	let url = req.params.url;
	Page.findOne({
		where: {
			urlTitle: url
		}
	})
	.then((foundPage) => res.render('wikipage', { PageData: foundPage }))
	.catch(next);
});

router.post('/', function(req, res, next){
	var page = Page.build({
		title : req.body.title,
		content: req.body.content,
	});
	page.save()
	.then( function() {
		res.redirect('/wiki/' + page.urlTitle);
	})
	.catch(next);
})

module.exports = router;