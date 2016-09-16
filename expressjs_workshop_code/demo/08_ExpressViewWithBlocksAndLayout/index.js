/**
 * Demonstration of Express Views with Blocks and Layout
 */

var express = require('express'),
    path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

/*
app.get('/', function (req, res) {
    res.render('empty');
});
*/
app.get('/index', function(req, res) {
    res.render('index');
});

app.get('/myindex', function(req, res) {
    res.render('myindex', { layout: 'my_layout'});
});

app.get('/cssindex', function(req, res) {
    res.render('cssindex', { layout: 'css_layout'});
});

app.get('/stylusindex', function(req, res) {
    res.render('stylusindex', { layout: 'stylus_layout'});
});

app.listen(3000);
console.log('Access through http://localhost:3000/');
