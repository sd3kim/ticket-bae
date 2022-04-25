const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://sd3kim:1Sharonmichelle@cluster0.et4qd.mongodb.net/ticketbae",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});
