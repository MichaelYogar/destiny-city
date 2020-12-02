const express = require("express");
const router = express.Router();
const db = require("../db");

/* Handle Logout */
router.get("/logout", (req, res) => {
  console.log("I am Logout");
  console.log(req.isAuthenticated());
  console.log(req.session);
  req.session.destroy(function () {
    res.clearCookie("connect.sid");
    console.log(req.session);
    res.redirect("/");
  });
});

module.exports = router;
