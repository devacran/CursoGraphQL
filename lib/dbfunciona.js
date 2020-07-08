//Puedes usar este archivo para hacer modificaciones directamente a la db

// const { DB_USER, DB_PASSWD, DB_HOST, DB_NAME, DB_PORT } = process.env;
const MongoClient = require("mongodb").MongoClient;
// const uri = `mongodb+srv://${DB_USER}:${DB_PASSWD}@cluster0.rq6yk.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const uri =
  "mongodb+srv://platzi-admin:12345@cluster0.rq6yk.mongodb.net/plazti-cursos?retryWrites=true&w=majority";

MongoClient.connect(uri, function (err, db) {
  if (err) throw err;
  var dbo = db.db("platzi-cursos");
  dbo
    .collection("students")
    .find({ $text: { $search: "Adriana" } })
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});
