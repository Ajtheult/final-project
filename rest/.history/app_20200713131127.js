const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

//ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

//Connect To DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to DB!")
);

//How do we start listening to the server
app.listen(3000);
