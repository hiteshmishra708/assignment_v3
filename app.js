var express = require('express');
var bodyparser = require('body-parser');

var chalk = require('chalk');
var app = express(); // exporting apps must be done before routes.js
var routes = require('./routes/routes.js');


app.use(express.static(__dirname + "/public"));
app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({extended:false}));

// REST Routes
app.get('/api/getData', routes.getData);  // return all tech records


var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log(chalk.green('HTTP server is listening on port: ' + port));
});
