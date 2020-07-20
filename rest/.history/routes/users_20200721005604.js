const express = require("express");
const router2 = express.Router();
const User = require("../models/User");

//Get users
router2.get("/", (req, res) => {
  res.send("We are on user posts");
});

router2.post("/", (req, res) => {
  const user = new User({
    name: req.body.name,
    surname: req.body.surname,
    gender: req.body.gender,
    birthday: req.body.birthday,
    email: req.body.email,
    password: req.body.password,
  });
});

module.exports = router2;
