/*
============================================
; Title:  blohn-assignment-3.4.js
; Author: Professor Krasso
; Date:   7 March 2020
; Modified By: Janet Blohn
; Description: Assignment 3.4 - Putting it all together
; Create a Navigation Example
============================================
*/

// Import blohn-header.js file
const header = require('../../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Assignment 3.4"));

// Create the variables
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

// Call the express function to start the Express application
var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell express the views are in the "views" directory
app.set("view engine", "ejs"); // Tell Express to use the EJS view engine.

app.use(logger("short")); // Tell express to use Morgan for logging.

// Render the homepage and set "home page" for the message on that page.
app.get("/", function(request, response) {
  response.render('index', {
    message: "home page"
  });
});

// Render the about page and set "about page" for the message on that page.
app.get("/about", function(request, response) {
  response.render("about", {
    message: "about page"
  });
});

// Render the contact page and set "contact page" for the message on that page.
app.get("/contact", function(request, response) {
  response.render("contact", {
    message: "contact page"
  });
});

// Render the products page and set "products page" in the message on that page.
app.get("/products", function(request, response) {
  response.render("products", {
    message: "products page"
  });
});

// Start the server on port 8080
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080.");
});
