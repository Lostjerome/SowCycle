const mysql = require("mysql2");
require("dotenv").config();

const database = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

database.connect((err) => {
  if (err) throw err;
  console.log("Connected to database");
});

module.exports = database;