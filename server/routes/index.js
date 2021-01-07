const express = require("express");
const router = express.Router();
const data = require("./data");
const auth = require("./auth");
const dashboard = require("./dashboard");

router.use("/data", data);
router.use("/auth", auth);
router.use("/dashboard", dashboard);

module.exports = router;
