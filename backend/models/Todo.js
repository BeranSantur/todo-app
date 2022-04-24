const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    task: String,
    day: String,
    priority: String,
    done: String,
  },
  { timestamps: true }
);

const Todo = mongoose.model("Todo", schema);

module.exports = Todo;
