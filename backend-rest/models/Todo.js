const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shortid = require("shortid");

// Create Schema
const TodoSchema = new Schema({
  urlId: {
    type: String,
    default: shortid.generate
  },
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
