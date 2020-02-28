/*
============================================
; Title:  blohn-exercise-2.3.js
; Author: Professor Krasso
; Date:   28 February 2020
; Modified By: Janet Blohn
; Description: Exercise 2.3 - Routes
; Create Routing Functions.
============================================
*/

// Import blohn-header.js file
const header = require('../../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Exercise 2.3"));

// Create variables
var express = require("express");
var http = require("http");

var app = express();

// Send a response to the request based on the page requested.
app.get("/", function(request, response) {
  response.end("Welcome to the homepage!");
});

app.get("/about", function(request, response) {
  response.end("Welcome to the about page!");
});

app.get("/contact", function(request, response) {
  response.end("Welcome to the contact page!");
});

// Send an error message if the requested page isn't found.
app.use(function(request, response) {
  response.statusCode = 404;
  response.end("404!");
});

// Start the server.
http.createServer(app).listen(8080);
