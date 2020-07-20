const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  type: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  model: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Posts", PostSchema);
