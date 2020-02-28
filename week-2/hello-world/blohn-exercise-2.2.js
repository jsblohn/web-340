/*
============================================
; Title:  blohn-exercise-2.2.js
; Author: Professor Krasso
; Date:   27 February 2020
; Modified By: Janet Blohn
; Description: Exercise 2.2 - Hello World with Express
; Create the Hello World JavaScript program and run using Express.
============================================
*/

// Import blohn-header.js file
const header = require('../../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Exercise 2.2"));

// Create the variables.
var express = require("express");
var http = require("http");

var app = express();

// Display the URL to the console and send with "Hello World" to the requesting page.
app.use(function(request, response) {
  console.log("In comes a request to: " + request.url);
  response.end("Hello World");
});

// Start the server.
http.createServer(app).listen(8080);
