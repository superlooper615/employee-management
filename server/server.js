const express = require("express");
const bodyParser = require("body-parser");
require ('./app/models/db');
const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to employee management application." });
});

// set port, listen for requests
var port = 3000;

app.listen(port, () => {
  console.log("Server is running on port 3000.");
});


