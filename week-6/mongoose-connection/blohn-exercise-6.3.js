/*
============================================
; Title:  blohn-exercise-6.3.js
; Author: Professor Krasso
; Date:   26 March 2020
; Modified By: Janet Blohn
; Description: Exercise 6.3 - Mongoose
; Create a Mongoose Connecting to MongoDB example.
============================================
*/

// Import blohn-header.js file
const header = require('../../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Exercise 6.3"));

// Create the variables
var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");

//Connect to MongoDB with Mongoose.
var mongoDB = "mongodb+srv://jsblohn:BozeViRu@buwebdev-cluster-1-akhri.mongodb.net/ems";

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function() {
  console.log("Application connected to mLab MongoDB instance");
});

// Start
var app = express();
app.use(logger("short"));

// Send a "Welcome" to the page so the "GET not found" and the 404 messages go away.
app.get("/", function(request, response) {
  response.send("<h2>Welcome!</h2>");
});

// create server
http.createServer(app).listen(8080, function() {
  console.log("Application connected to port 8080!");
});
