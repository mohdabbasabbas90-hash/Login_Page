const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@Abbas055",
  database: "login_db",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("MySQL Connected");
  }
});

app.post("/register", (req, res) => {
  const { email, password } = req.body;

  const sql =
    "INSERT INTO users (email, password) VALUES (?, ?)";

  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error");
    } else {
      res.send("User Registered");
    }
  });
});

app.listen(5000, () => {
  console.log("Server Running");
});