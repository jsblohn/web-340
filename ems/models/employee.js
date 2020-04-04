/*
============================================
; Title:  employee.js
; Author: Professor Krasso
; Date:   03 April 2020
; Modified By: Janet Blohn
; Description: Create a Mongoose file for the Employee database model.
;===========================================
*/

// Require statements
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Employee Schema
let employeeSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true}
});

// Export the model so it's publicly available
//module.exports = mongoose.model("Employee", EmployeeSchema);
module.exports = mongoose.model("Employee", employeeSchema);
