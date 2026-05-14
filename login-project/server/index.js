const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());


require("dotenv").config();

const db = mysql.createConnection(process.env.DATABASE_URL);

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("MySQL Connected");
  }
});

app.post("/register", (req, res) => {
  const { name, password } = req.body;

  const sql =
    "INSERT INTO users (name, password) VALUES (?, ?)";

  db.query(sql, [name, password], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error");
    } else {
      res.send("User Registered");
    }
  });
});
const port = process.env.port || 5000;
app.listen(port, () => {
  console.log("Server Running");
});