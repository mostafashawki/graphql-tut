const express = require("express");
const router = express.Router();
const TodosController = require("../controllers/todos");

// @route   GET /
// @desc    Get all todos
router.get("/", TodosController.todos_get);

// @route   POST /
// @desc    Create new todo
router.post("/", TodosController.todos_post);

// @route   PUT /
// @desc    update the todo
router.put("/", TodosController.todos_put);

// @route   DELETE /:id
// @desc    Delete todo
router.delete("/:id", TodosController.todos_delete);

module.exports = router;
