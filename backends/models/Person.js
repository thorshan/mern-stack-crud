const mongoose = require("mongoose");

//
const PersonSchema = mongoose.Schema({
  name: String,
  age: Number,
  city: String,
  gender: String,
});
const Person = mongoose.model("Person", PersonSchema);

module.exports = Person;
