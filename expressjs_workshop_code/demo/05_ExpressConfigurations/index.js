/**
 * Demonstration of Express Configurations
 */
var express = require('express');

var app = express();

var env = process.env.NODE_ENV || 'production';
if ('production' == env) {
   app.set('title', 'Demo Application');
}
else {
    app.set('title', 'Demo Application - development');
}

app.get('/', function(req, res) {
   res.send('Title is ' + app.get('title'));
});

app.listen(3000);
console.log('Access through http://localhost:3000/');
