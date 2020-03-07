/*
============================================
; Title:  blohn-exercise-3.2.js
; Author: Professor Krasso
; Date:   6 March 2020
; Modified By: Janet Blohn
; Description: Exercise 3.2 - Routes
; Create a Logging Example.
============================================
*/

// Import blohn-header.js file
const header = require('../../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Exercise 3.2"));

// Create the variables
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

// Call the express function to start the Express application
var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell express the views are in the "views" directory
app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

// Use Morgan for logging
app.use(logger("short"));

// Render the Home Page when at the root.
app.get("/", function(request, response) {
  response.render("index", {
    message: "Using Morgan Logger for logging...."
  });
});

// Start the server and output message to that effect.
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080");
});
