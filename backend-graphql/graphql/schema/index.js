const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Todo {
        id:ID
        assigneeEmail: String
        todoText: String
    }

    type Query {
        getTodos: [Todo]
        getOneTodo(id: ID!): Todo
    }

    input TodoInput {
        id:ID
        assigneeEmail: String
        todoText: String
    }

    type Mutation {
        createTodo(input: TodoInput): Todo
        updateTodo(input: TodoInput): Todo
        deleteTodo(id: ID!): String
    }
    schema {
      query: Query
      mutation: Mutation
  }
  `);
