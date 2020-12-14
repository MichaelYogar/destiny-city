const express = require("express");
const users = require("./users");
const api = require("./api");
const router = express.Router();

router.use("/users", users);
router.use("/api", api);

module.exports = router;
