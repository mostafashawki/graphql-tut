const mongoose = require("mongoose");
const Todo = require("../models/Todo");

exports.todos_get = (req, res, next) => {
  Todo.find()
    .then(todo => {
      if (!todo) return res.status(404).json("no todos!");
      res.json(todo);
      console.log(todo);
    })
    .catch(next);
};

exports.todos_post = (req, res, next) => {
  console.log("works---------", req.body);
  // // Get fields
  const todoFields = {};
  todoFields.todoText = req.body.todoText;
  todoFields.assigneeEmail = req.body.assigneeEmail;

  // Save Todo
  new Todo(todoFields)
    .save()
    .then(todo => res.json(todo))
    .catch(next);
};

exports.todos_put = (req, res, next) => {
  // // Get fields
  const todoFields = {};
  todoFields._id = req.body._id;
  todoFields.todoText = req.body.todoText;
  todoFields.assigneeEmail = req.body.assigneeEmail;
  // Update
  Todo.findOneAndUpdate(
    { _id: todoFields._id },
    { $set: todoFields },
    //to return the new one
    { new: true }
  )
    .then(todo => res.json(todo))
    .catch(next);
};

exports.todos_delete = (req, res, next) => {
  Todo.findOneAndRemove({ _id: req.params.id })
    .then(todo => res.json(todo))
    .catch(next);
};
