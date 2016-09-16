/**
 * Demonstration of using sessions in Express
 */
var express = require('express'),
    session = require('express-session');

var app = express();

app.use(session({secret: 'secret sentence'}));

app.get('/', function(req, res) {
    req.session.name = req.session.name || new Date().toUTCString();
    console.log(req.sessionID);
    res.send("Session Name: " + req.session.name);
});

app.listen(3000);
console.log('Access through http://localhost:3000/');


