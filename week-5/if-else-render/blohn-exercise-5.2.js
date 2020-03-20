/*
============================================
; Title:  blohn-exercise-5.2.js
; Author: Professor Krasso
; Date:   20 March 2020
; Modified By: Janet Blohn
; Description: Exercise 5.2 - EJS Templates
; Create if statements by iterating through an array.
============================================
*/

// Import blohn-header.js file
const header = require('../../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Exercise 5.2"));

// Create the variables
var express = require("express");
var http = require("http");
var path = require("path");

// Call the express function to start the Express application
app = express();

// Tell Express where to find the views and to use EJS for them.
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// Create the array for EJS to use for output
var n = ["Bob", "Shannon", "Joe", "Mary"];

// Render the home page and use the names above
app.get("/", function(request, response) {
  response.render("index", {
    names: n
  });
});

// Start the server on port 8080
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
