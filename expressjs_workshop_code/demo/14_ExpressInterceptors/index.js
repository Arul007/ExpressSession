/**
 * Demonstration of Express Interceptors
 */

var express = require('express'),
	util = require('util');

var app = express();

var globalInterceptor = function(req, res, next) {
	console.log(util.format('GLOBAL INTERCEPTOR ==> Requested Path is %s', req.path));
	next();
}

app.use(globalInterceptor);

var singleInterceptor = function(req, res, next) {
	console.log(util.format('SINGLE INTERCEPTOR ==> Requested Path is %s', req.path));
	next();
}

app.get('/', function (req, res) {
    res.send('Path - Root is called...');
});

app.get('/single', singleInterceptor, function(req, res) {
    res.send('Path - Single is called');
});

app.listen(3000);
console.log('Access through http://localhost:3000/');
