const Todo = require("../../models/Todo");

module.exports = {
  getTodos: async () => {
    try {
      return await Todo.find();
    } catch (err) {
      throw err;
    }
  },
  getOneTodo: async args => {
    try {
      return await Todo.findOne({ _id: args.id });
    } catch (err) {
      throw err;
    }
  },
  createTodo: async args => {
    console.log(args);
    const todo = new Todo({
      assigneeEmail: args.input.assigneeEmail,
      todoText: args.input.todoText
    });

    try {
      const result = await todo.save();

      return result;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  updateTodo: async args => {
    console.log(args);
    try {
      const result = await Todo.findOneAndUpdate(
        { _id: args.input.id },
        args.input,
        {
          new: true
        }
      );

      return result;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  deleteTodo: async args => {
    console.log(args);
    try {
      await Todo.deleteOne({ _id: args.id });

      return "Successfully deleted todo!";
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
