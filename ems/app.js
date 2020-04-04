/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   22 March 2020
; Modified By: Janet Blohn
; Modified Date: 03 April 2020
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
var mongoose = require("mongoose");
var Employee = require("./models/employee");

//Connect to MongoDB with Mongoose.
var mongoDB = "mongodb+srv://jsblohn:BozeViRu@buwebdev-cluster-1-akhri.mongodb.net/ems";
mongoose.connect(mongoDB, {
  useNewUrlParser: true, useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function() {
  console.log("Application connected to mLab MongoDB instance");
});

// Call the express function to start the Express application.
var app = express();

// Tell Express where to find the views and all tell Express to use Pug as the engine.
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
app.use(express.static("css"));


app.get("/", function(request, response) {
  Employee.find({}, function(err, employees) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employees);
      response.render("index", {
        title: "EMS | Home",
        employees: employees
      })
    }
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
