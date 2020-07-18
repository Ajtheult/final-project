const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("We are on posts");
});

router.get("/a", (req, res) => {
  res.send("a");
});

module.exports = router;
