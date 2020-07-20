const express = require("express");
const router2 = express.Router();
// const User = require("../models/User");
//Get users
router2.get("/", async (req, res) => {
  res.send("We are on user posts");
});

module.exports = router2;
