/*
============================================
; Title:  blohn-exercise-7.2.js
; Author: Professor Krasso
; Date:   03 April 2020
; Modified By: Janet Blohn
; Description: Demonstrates how to create a TDD unit test.
;===========================================
*/
// Use the Assert module to test the expression
var assert = require("assert");

// Specify what should happen when the test is run
describe("String#split", function() {
  it("should return an array of fruits", function() {
    assert(Array.isArray("Apple,Orange,Mango".split(",")));
  });
});
