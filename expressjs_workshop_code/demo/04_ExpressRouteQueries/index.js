/**
 * Demonstration of Express Route - queries
 */
var express = require('express');

var app = express();

app.get('/employee', function(req,res) {
   res.send('Employee selected (through query) is ' + ' id = ' + req.query.id + ' name=' + req.query.name);
});

app.listen(3000);
console.log('Access through http://localhost:3000/');
