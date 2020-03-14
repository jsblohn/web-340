/*
============================================
; Title:  blohn-assignment-4.4.js
; Author: Professor Krasso
; Date:   14 March 2020
; Modified By: Janet Blohn
; Description: Exercise 4.4 - CRUD
; Create GET, POST, PUT, and DELETE requests and use cURL to test them.
============================================
*/

// Import blohn-header.js file
const header = require('../../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Assignment 4.4"));

// Create the variables
var express = require("express");
var http = require("http");

// Call Express and put it inside the app variable
var app = express();

// Respond to a GET request
app.get("/", function(request, response) {
  response.send("API invoked as an HTTP GET request.");
});

// Respond to a PUT request
app.put("/", function(request, response) {
  response.send("API invoked as an HTTP PUT request.");
});

// Respond to a POST request
app.post("/", function(request, response) {
  response.send("API invoked as an HTTP POST request.");
});

// Respond to a DELETE request
app.delete("/", function(request, response) {
  response.send("API invoked as an HTTP DELETE request.");
});

// Start the Server on port 8080
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080!");
});
