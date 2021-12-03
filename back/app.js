const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 8000;

const usernameDB = "admin";
const passwordDB = "384ad_minEkip";
const clusterDB = "cluster0.party";
const dbName = "384ekipDB";

const admin = require("./routes/admin");
const guest = require("./routes/guest");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "*");

  // intercept OPTIONS method
  if ("OPTIONS" == req.method) {
    res.send(200);
  } else {
    next();
  }
});

const MONGO_DB_URI = `mongodb+srv://${usernameDB}:${passwordDB}@${clusterDB}.mongodb.net/${dbName}?retryWrites=true&w=majority`;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World !");
});

app.use("/admin", admin);
app.use("/guest", guest);

mongoose
  .connect(MONGO_DB_URI)
  .then((res) => {
    app.listen(port);
    console.log("works!");
  })
  .catch((error) => {
    console.log(error);
  });
