/*
============================================
; Title:  blohn-exercise-5.3.js
; Author: Professor Krasso
; Date:   20 March 2020
; Modified By: Janet Blohn
; Description: Exercise 5.3 - Pug Templates
; Demonstrates the Pug view engine.
============================================
*/

// Import blohn-header.js file
const header = require('../../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Exercise 5.3"));

// Create the variables
var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");

// Call the express function to start the Express application.
var app = express();

// Tell Express where to find the views and all tell Express to use Pug as the engine.
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

// Render the index/home page and output the message.
app.get("/", function(request, response) {
  response.render("index", {
    message: "I just proved I could get Pug to work!!  YAY!!"
  });
});

// Start the http server on port 8080.
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
