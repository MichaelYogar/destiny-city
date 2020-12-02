const axios = require("axios").default;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const bcrypt = require("bcrypt");
const session = require("express-session");
const db = require("./db");
const routes = require("./routes");
const passport = require("passport");
const initializePassport = require("./passportConfig");
const { checkAuthenticated } = require("./middleware");

const port = 5000 || process.env.PORT;
require("dotenv").config();

/* ---------- MIDDLEWARE ---------- */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

/* ---------- PASSPORT ---------- */
app.use(passport.initialize());
app.use(passport.session());
initializePassport(passport);
app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
      });
    }
  })(req, res, next);
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  let hashedPassword = await bcrypt.hash(password, 10);
  const result = db.query(
    "INSERT INTO users (username, password) VALUES ($1, $2)",
    [username, hashedPassword]
  );
  res.send("this is working");
});

/* ---------- ROUTES ---------- */
app.use(routes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
