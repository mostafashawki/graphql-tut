const express = require("express");
const graphqlHttp = require("express-graphql");
const mongoose = require("mongoose");

const graphQlSchema = require("./graphql/schema/index");
const graphQlResolvers = require("./graphql/resolvers/index");

const app = express();
const cors = require("cors");
//use cors
app.use(cors());

// *** config file *** //
const db = require("./config").mongoURI[app.settings.env];

app.use(
  "/graphql",
  graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
);

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(7722);
  })
  .catch(err => {
    console.log(err);
  });

module.exports = app;
