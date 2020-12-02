const axios = require("axios").default;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const bcrypt = require("bcrypt");
const session = require("express-session");
const db = require("./db");
const passport = require("passport");
const initializePassport = require("./passportConfig");
const { checkAuthenticated } = require("./middleware");

const port = 5000 || process.env.PORT;
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
initializePassport(passport);

/* Handle Logout */
app.get("/logout", (req, res) => {
  console.log("I am Logout");
  req.session.destroy(function () {
    res.clearCookie("connect.sid");
    res.redirect("/");
  });
});

// once done adding react router and just doing some tests in front end, test logout and ten test adding middleware to post login route

app.get("/login", (req, res) => {
  console.log(req.session);
  res.json(req.session);
});

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
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

app.get("/", async (req, res) => {
  const data = await axios.get(
    "https://api.teleport.org/api/countries/iso_alpha2:US/admin1_divisions/geonames:CA/"
  );
  console.log(data);
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
