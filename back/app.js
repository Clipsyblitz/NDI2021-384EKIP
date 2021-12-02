const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 8000;

const usernameDB = "admin";
const passwordDB = "384ad_minEkip";
const clusterDB = "cluster0.party";
const dbName = "384ekipDB";

//const MONGO_DB_URI = `mongodb+srv://${usernameDB}:${passwordDB}@${clusterDB}.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const MONGO_DB_URI =
  "mongodb+srv://admin:384ad_minEkip@cluster0.party.mongodb.net/384ekipDB?retryWrites=true&w=majority";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World !");
});

mongoose
  .connect(MONGO_DB_URI)
  .then((res) => {
    app.listen(port);
    console.log("works!");
  })
  .catch((error) => {
    console.log(error);
  });
