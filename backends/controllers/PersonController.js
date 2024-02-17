const Person = require("../models/Person");

// Get all person
const getAllPerson = async (req, res) => {
  const persons = await Person.find();
  res.json({ persons });
};

// Add new person
const addNewPerson = async (req, res) => {
  const { name, age, gender, city } = req.body;
  const person = await Person.create({
    name,
    age,
    gender,
    city,
  });
  res.json({ person });
};

// Get person by Id
const getPerson = async (req, res) => {
  const personId = req.params.id;
  const person = await Person.findById(personId);
  res.json({ person });
};

// Update person
const updatePerson = async (req, res) => {
  const personId = req.params.id;
  const { name, age, city, gender } = req.body;
  await Person.findByIdAndUpdate(personId, {
    name,
    age,
    city,
    gender,
  });
  res.json({ success: "Person updated successfully." });
};

// Delete person
const deletePerson = async (req, res) => {
  const personId = req.params.id;
  await Person.findByIdAndDelete(personId);
  res.json({ success: "Person deleted successfully." });
};

module.exports = {
  getAllPerson,
  addNewPerson,
  getPerson,
  updatePerson,
  deletePerson,
};
