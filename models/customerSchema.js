// importing mongoose in this script
const mongoose = require('mongoose');

// creating schema 
let detail = new mongoose.Schema({
  name: String
});


// here ant is collection and  detail is the variable where schema is stored.
const Abc = mongoose.model("ANT", detail);

// exporting schema to the main js file
module.exports = {Abc}