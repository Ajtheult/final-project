const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  fullname: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  birthday: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("user", UserSchema);
