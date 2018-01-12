// Requiring dependencies through npm packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Call express and set the initial port
var app = express();
var PORT = process.env.PORT || 8080;

// Determine how to handle the data output
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// create routes


// startup the server
app.listen(PORT, function(){
    console.log("App listening on port: " + PORT);
});