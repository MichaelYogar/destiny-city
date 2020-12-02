const axios = require("axios").default;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const bcrypt = require("bcrypt");
const db = require("./db");

const port = 5000 || process.env.PORT;
require("dotenv").config();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post("/login", async (req, res) => {
  console.log(req.body);
  res.send("this is working");
});

app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  let hashedPassword = await bcrypt.hash(password, 10);
  const result = db.query(
    "INSERT INTO users (username, password) VALUES ($1, $2)",
    [email, password]
  );
  res.send("this is working");
});

// app.get("/", async (req, res) => {
//   const data = await axios.get(
//     "https://api.teleport.org/api/countries/iso_alpha2:US/admin1_divisions/geonames:CA/"
//   );
//   console.log(data);
//   res.send("hello world");
// });

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
