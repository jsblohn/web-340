/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   15 April 2020
; Modified By: Janet Blohn
; Last Modified Date: 10 April 2020
; Description: Node program for EMS Project
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
var helmet = require("helmet");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
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

// Setup CSRF Protection
let csrfProtection = csrf({cookie: true});

// Call the express function to start the Express application.
var app = express();

// Set up the applications to use
app.use(logger("short"));  // Use Morgan for logging
//app.use(express.static("css")); // Use an external CSS file
//app.use(express.static(_dirname + "/css")); // Use an external CSS file
app.use(bodyParser.urlencoded ({  // Use Body Parser to parse the incoming request
    extended: true
  })
);
app.use(cookieParser());  // Parse the cookies attached to the client request with Cookie Parser
app.use(helmet.xssFilter());  // Use Helmet to secure HTTP requests
app.use(csrfProtection);  // Add CSRF protection to all incoming calls
app.use(function(request, response, next) {
  var token = request.csrfToken();
  response.cookie("XSRF-TOKEN", token);
  response.locals.csrfToken = token;
  next();
});
app.use(express.static(__dirname + "/public"));  // Define for CSS folder
// Tell Express where to find the views.
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 8080);
// Redirect users to the "index" (home) page
app.get("/", function(request, response) {
  Employee.find({}, function(err, employees) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employees);
      response.render("index", {
        title: "EMS | Home",
        employees: employees,
        //message: "XSS Prevention Example",  Left these 2 here to show they were tested
        //message2: "New Employee Entry Page"
      })
    }
   });
});

// Send to the "new" page when chosen
app.get("/new", function(request, response) {
  response.render("new", {
    title: "EMS | New"
  });
});

// Process a form transmission
app.post("/process", function(request, response) {
  console.log(request.body.firstName, request.body.lastName);
  if(!request.body.firstName || !request.body.lastName) {
    response.status(400).send("Entries must have a name");
    return;
  }
  //response.redirect("/");

// Get the new employee form
const firstName = request.body.firstName;
const lastName = request.body.lastName;
console.log(firstName, lastName);

// Create the Employee Model
let employee = new Employee({
  firstName: firstName,
  lastName: lastName
});

// Save the New Employee
employee.save(function(err) {
  if(err) {
    console.log(err);
    throw err;
  } else {
    console.log(firstName + " " + lastName + " saved successfully!");
  }
});
 response.redirect("/list"); //wrong spot?
});

app.get("/list", function(request, response) {
  Employee.find({}, function(error, employees) {
    if(error)throwerror;
      response.render("list", {
      title: "EMS | List",
      employees:employees
    });
  });
});

app.get("/view/:queryName", function(request,response) {
  const queryName = request.params["queryName"];

  Employee.find({"lastName": queryName}, function(err,employees) {
    if(err) {
      console.log(err);
      throw err;
    } else {
      console.log(employees);

      if(employees.length > 0) {
        response.render("view", {
          title: "EMS | View",
          employee: employees
        })
      } else {
        response.redirect("/");
      }
    }
  })
});

http.createServer(app).listen(app.get("port"), function() {
  console.log("Application started on port " + app.get("port"))
});
