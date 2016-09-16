/**
 * Demonstration of error handling in Express
 */
var express = require('express'),
    path = require('path');

var app = express();

var notFound = function(req, res, next) {
//    res.statusCode = 404;
    res.description = 'Not found';
    res.render('404');
}

var errorHandler = function(err, req, res, next) {
    console.log(err);
    res.statusCode = 500;
    res.description = 'Internal error';
    res.render('500');
}

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, '/views'));

app.get('/', function(req, res) {
    res.send('This is the text');
});

app.get('/login', function(req, res) {
    res.render('login');
});

app.get('/logout', function(req, res) {
    res.render('logout');
});

app.use(notFound);
app.use(errorHandler);

app.listen(3000);
console.log('Access through http://localhost:3000/');
