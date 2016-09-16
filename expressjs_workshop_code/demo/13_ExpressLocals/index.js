/**
 * Demonstration of Express app.locals
 */
var express = require('express'),
    path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/demolocals', function (req, res) {
    res.render('demolocals');
});

app.get('/news', function (req, res) {
    res.render('news');
});

app.get('/sports', function (req, res) {
    res.render('sports');
});

app.get('/weather', function (req, res) {
    res.render('weather');
});

app.locals.timeData = {datetime: new Date().toUTCString()};
app.locals.companyName = "Wipro";

app.listen(3000);
console.log('Access through http://localhost:3000/');
