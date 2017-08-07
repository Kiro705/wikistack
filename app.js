const express = require('express');
const app = express();
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const models = require('./models');
const path = require('path');

app.use(volleyball);
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);
app.use(express.static('public'));

models.db.sync({ force: true })
.then(function() {
    app.listen(5432, function() {
    console.log('Hello There');
    });
})
.catch(console.error);



// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);

nunjucks.configure('views', {noCache: true});