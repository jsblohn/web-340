/*
============================================
; Title:  blohn-exercise-3.3.js
; Author: Professor Krasso
; Date:   7 March 2020
; Modified By: Janet Blohn
; Description: Exercise 3.3 - Advanced Routing
; Create an Advanced Routing Example.
============================================
*/

// Import blohn-header.js file
const header = require('../../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Exercise 3.3"));

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

// Get the employeeId.
app.get("/:employeeId", function(request, response) {
  var employeeId = parseInt(request.params.employeeId, 10);

  // Render the Home Page when at the root.
  response.render("index", {
    employeeId: employeeId
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080");
});
