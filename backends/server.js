if (process.env.NODE_ENV != "production") require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const connectToDb = require("./config/databse");
const PersonController = require("./controllers/PersonController");

// depedencies
app.use(express.json());
app.use(cors());

// connect to db
connectToDb();

// route to / page
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Get all person
app.get("/person", PersonController.getAllPerson);

// Add new person
app.post("/person", PersonController.addNewPerson);

// Get person by Id
app.get("/person/:id", PersonController.getPerson);

// Update person
app.put("/person/:id", PersonController.updatePerson);

// Delete person
app.delete("/person/:id", PersonController.deletePerson);

app.listen(process.env.PORT);
