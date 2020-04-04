/*
============================================
; Title:  blohn-exercise-7.3.js
; Author: Professor Krasso
; Date:   03 April 2020
; Modified By: Janet Blohn
; Description: Demonstrates how to create a Chai test.
;===========================================
*/

// Require the "blohn-fruits" module
var fruits = require("../blohn-fruits");

// Require Chai and Chai's Assert module
var chai = require("chai");
var assert = chai.assert;

// If successful, it should return an array of fruits
describe("fruits", function() {
  it("should return an array of fruits", function() {
    var f = fruits("Apple,Orange,Mango");
    assert(Array.isArray(f));
  });
});
