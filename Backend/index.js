const express = require("express");
const app = express();
const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "sowcycle",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

// set /api as the base route
app.use("/api", (req, res, next) => {
  console.log("Request received at /api");
  next();
});

// GET /api/pigs
app.get("/pigs", (req, res) => {
  console.log("Request received at /api/pigs");
  connection.query("SELECT * FROM pigs", (err, results) => {
    if (err) {
      console.error("Error retrieving pigs:", err);
      res.status(500).send("Error retrieving pigs");
    } else {
      console.log("Pigs retrieved successfully");
      res.status(200).json(results);
    }
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
