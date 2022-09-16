//Configuration file of Mongoose to create and connect the Database(MongoDB).

// importing mongoose
const mongoose = require("mongoose");

// connecting mongo db database
const MongoDBURL = "mongodb://localhost/grocery-API-Flixstocks";
mongoose.connect(MongoDBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});
const db = mongoose.connection;

// error handling
db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

// conformation message
db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

// exporting db  for index.js
module.exports = db;
