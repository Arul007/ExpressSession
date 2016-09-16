/**
 * Demonstration of Express Route - parameters
 */
var express = require('express');

var app = express();

app.get('/employee/:id', function(req, res) {
    res.send('Employee selected (through parameter) is ' + req.params.id);
});

app.listen(3000);
console.log('Access through http://localhost:3000/');
