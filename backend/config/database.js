const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/ticketbae", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ticketbaeDB = mongoose.connection;

ticketbaeDB.on("connected", function () {
  console.log(
    `Connected to ${ticketbaeDB.name} at ${ticketbaeDB.host}:${ticketbaeDB.port}`
  );
});
