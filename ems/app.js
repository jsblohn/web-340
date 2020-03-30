/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   22 March 2020
; Modified By: Janet Blohn
; Description: Assignment 5.4 - EMS
; Demonstrates EJS Layouts
============================================
*/

// Import blohn-header.js file
const header = require('../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "EMS Assignment"));

// Create the variables
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

// Call the express function to start the Express application.
var app = express();

// Tell Express where to find the views and all tell Express to use Pug as the engine.
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
app.use(express.static("css"));
//app.use('/css',express.static(__dirname +'/css'));
//app.use(express.static(path.join(__dirname,'css')));

app.get("/", function(request, response) {
  response.render("index", {
    title: "Home Page"
  });
});

app.get("/list", function(request, response) {
 /* response.render("list", {
    title: "Employee List"
  });
});*/
response.end("Welcome to the Employee List Page");
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
