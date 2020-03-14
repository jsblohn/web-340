/*
============================================
; Title:  blohn-exercise-4.3.js
; Author: Professor Krasso
; Date:   14 March 2020
; Modified By: Janet Blohn
; Description: Exercise 4.3 - HTTP Status Codes
; Create HTTP Status Code messages.
============================================
*/

// Import blohn-header.js file
const header = require('../../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Exercise 4.3"));

// Create the variables
var express = require("express");
var http = require("http");

// Call Express and put it inside the app variable
var app = express();

// Define the route URL and response message for 404 status
app.get("/not-found", function (request, response) {
  response.status(404);

  response.json({
    error: "Unable to locate resource."
  });
});

// Define the route URL and response message for status of 200
app.get("/ok", function(request, response) {
  response.status(200);

  response.json ({
    message: "Page successfully loaded."
  });
});

// Define the route URL and response message for 501 status
app.get("/not-implemented", function(request, response) {
  response.status(501);

  response.json ({
    error: "Unable to implement page."
  });
});

// Start the Server on port 8080
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
