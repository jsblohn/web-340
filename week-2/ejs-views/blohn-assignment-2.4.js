/*
============================================
; Title:  blohn-assignment-2.4.js
; Author: Professor Krasso
; Date:   28 February 2020
; Modified By: Janet Blohn
; Description: Assignment 2.4 - EJS Views
; Create JavaScript and HTML to use EJS Views
============================================
*/

// Import blohn-header.js file
const header = require('../../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Assignment 2.4"));

var http = require("http");
var express = require("express");
var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views")); // Let Express know the views are in the "views" directory
app.set("view engine", "ejs"); // Inform Express to use the EJS view engine

// Create fields for the HTML to pull in.
app.get("/", function(request, response) {
  response.render("index", {
    firstName: "Janet",
    lastName: "Blohn",
    address: "123 Dodge St"
  });
});

// Start the server.
http.createServer(app).listen(8080,function() {
  console.log("EJS-Views app started on port 8080.");
});
