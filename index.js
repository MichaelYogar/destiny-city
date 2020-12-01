const axios = require("axios").default;
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const { Pool } = require("pg");
const app = express();
const port = 5000 || process.env.PORT;
require("dotenv").config();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const pool = new Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DB,
  max: 20,
  connectionTimeoutMillis: 0,
  idleTimeoutMillis: 0,
});

app.get("/", async (req, res) => {
  try {
    console.log(results);
  } catch (e) {
    console.log(e);
  }
  res.send("hello world");
});

app.post("/login", async (req, res) => {
  console.log(req.body);
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
