/**
 * Demonstration of Express Routing (Organizing code in different files for different routes)
 */
var express = require('express'),
    home = require('./routes/home.js'),
    employee = require('./routes/employee.js');

var app = express();

app.get('/', home.index);
app.get('/employee', employee.index);
app.get('/employee/contact', employee.contact);


app.listen(3000);
console.log('Access through http://localhost:3000/');
