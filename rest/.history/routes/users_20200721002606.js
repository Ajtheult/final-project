const express = require("express");
const router = express.Router();
const User = require("../models/User");
//Get users
router.get("/", async (req, res) => {
  try {
    const posts = await User.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
