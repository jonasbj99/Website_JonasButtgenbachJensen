const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  text: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Comment", CommentSchema);
