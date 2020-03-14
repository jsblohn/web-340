/*
============================================
; Title:  blohn-exercise-4.2.js
; Author: Professor Krasso
; Date:   14 March 2020
; Modified By: Janet Blohn
; Description: Exercise 4.2 - JSON APIs
; Create a GET request and return a JSON object.
============================================
*/

// Import blohn-header.js file
const header = require('../../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Exercise 4.2"));

// Create the variables
var express = require("express");
var http = require("http");

//Call the express function to start the Express API
var app = express();

app.get("/oncall/:date", function(request, response) {
 var date = parseInt(request.params.date, 10);
  //var lastName = parse(request.params.lastName);

  response.json({
    name: "Craig Brown",  //name and phone#
    phoneNumber: "4021234567",
    when: date
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080");
});
