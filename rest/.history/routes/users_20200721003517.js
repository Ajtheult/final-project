const express = require("express");
const router2 = express.Router();
// const User = require("../models/User");
//Get users
router2.get("/", (req, res) => {
  res.send("We are on user posts");
});

router2.get("/specific", (req, res) => {
  res.send("Specific user");
});

module.exports = router2;
