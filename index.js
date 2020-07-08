require("dotenv").config();
const { graphql } = require("graphql");
const cors = require("cors");
const { makeExecutableSchema } = require("graphql-tools");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { join } = require("path");
const { readFileSync } = require("fs");
const resolvers = require("./lib/resolvers");

const app = express();
const port = process.env.port || 9000;

// definiendo el esquema
const typeDefs = readFileSync(join(__dirname, "lib", "schema.graphql"), "utf8");
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Configurar los resolvers
const isDev = process.env.NODE_ENV !== "production";

app.use(cors()); //este es para poder usar en produccion

app.use(
  "/api",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers, //Aqui van los resolvers
    graphiql: true, //este se dehablitica cuando esta en produccion
  })
);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`);
});
