/**
 * Demonstration of using cookies in Express
 */
var express = require('express'),
    cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());

app.get('/', function(req, res) {
    if (req.cookies.alreadyVisited == 'yes') {
        res.send('Already visited the page before ');
    }
    else {
        res.cookie('alreadyVisited', 'yes');
        res.send('First time visiting the page');
    }
});

app.get('/clear', function(req, res) {
    res.clearCookie('alreadyVisited');
    res.redirect('/');
});

app.listen(3000);
console.log('Access through http://localhost:3000/');
