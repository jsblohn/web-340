/*
============================================
; Title:  blohn-assignment-1.5.js
; Author: Professor Krasso
; Date:   21 February 2020
; Modified By: Janet Blohn
; Description: Assignment 1.5 - Hello World
; Create function constructors and prototypes for 3 vehicle types
; and send to the console.
============================================
*/

// Import blohn-header.js file
const header = require('../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Assignment 1.5"));

//Variable declaration:
var http = require("http");

function processRequest(req, res) {
var body = "It Worked!!!!";
    var contentLength = body.length;
    res.writeHead(200, {
        'Content-Length': contentLength,
        'Content-Type': 'text/plain'
    });
    res.end(body);
}
var s = http.createServer(processRequest);
s.listen(8080);
