const express = require("express");
const app = express();
const mongoose = require("mongoose");

//ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

app.get("/posts", (req, res) => {
  res.send("We are on posts");
});

//Connect To DB
mongoose.connect(
  "mongodb+srv://test1234:test1234@rest.bda8x.mongodb.net/test1234?retryWrites=true&w=majority",
  () => console.log("connected to DB!")
);
//How do we start listening to the server
app.listen(3000);
