/*
============================================
; Title:  blohn-exercise-1.3.js
; Author: Professor Krasso
; Date:   20 February 2020
; Modified By: Janet Blohn
; Description: Exercise 1.3 - Modules
; Module Example
============================================
*/

// Import blohn-header.js file
const header = require('../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Exercise 1.3"));

var url = require("url");

var parsedURL = url.parse("https://www.testurl.com/profile?name=blohn");

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);
