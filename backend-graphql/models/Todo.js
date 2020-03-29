const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TodoSchema = new Schema({
  assigneeEmail: {
    type: String,
    max: 255,
    required: true
  },
  todoText: {
    type: String,
    max: 5000,
    required: true
  }
});

module.exports = Todo = mongoose.model("todo", TodoSchema);
