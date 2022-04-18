var express = require("express");
var path = require("path");
var logger = require("morgan");
require("dotenv").config();
require("./backend/config/database");

const app = express();

const port = process.env.PORT || 3001;

app.use(logger("dev"));
app.use(express.json());

// app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

// app.use("/api/ticketbae", require("./backend/routes/api/ticketbae"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
