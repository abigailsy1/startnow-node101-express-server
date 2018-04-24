// import files and packages up here
var express = require('express');
var app = express();
var data = require('./data.json');

// create your express server below
var app;

// add your routes and middleware below
app.get('/',function(req,res){
    res.status(200).send('text');
})
app.get('/data', function(req,res){
    res.status(200).json(data);
})
// finally export the express application
module.exports = app;
