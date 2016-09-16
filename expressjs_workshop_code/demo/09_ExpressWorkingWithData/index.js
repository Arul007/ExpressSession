/**
 * Demonstration of Express and Working with Data
 */
var express = require('express'),
    path = require('path'),
    home = require('./routes/home.js');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
//app.use(express.static(path.join(__dirname, 'public')));

app.get('/', home.index);

app.get('/contact', home.contact);

app.listen(3000);
console.log('Access through http://localhost:3000/');
