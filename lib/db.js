require("dotenv").config();
("use strict");

const { MongoClient } = require("mongodb");
const { DB_URI } = process.env;

let connection;

async function connectDB() {
  if (connection) return connection;

  let client;
  try {
    client = await MongoClient.connect(DB_URI, {
      useNewUrlParser: true,
    });
    connection = client.db("platzi-cursos");
  } catch (error) {
    console.error("Could not connect to db", DB_URI, error);
    process.exit(1);
  }

  return connection;
}

module.exports = connectDB;
