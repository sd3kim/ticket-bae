var express = require("express");
var path = require("path");
var logger = require("morgan");
require("dotenv").config();
require("./backend/config/database");

const app = express();
require("./backend/config/database");

const port = process.env.PORT || 3001;

app.use(logger("dev"));
app.use(express.json());

// app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "./frontend/build")));

app.use("/api/artists", require("./backend/routes/api/artists"));
app.use("/api/locations", require("./backend/routes/api/locations"));
app.use("/api/dates", require("./backend/routes/api/dates"));
app.use("/api/users", require("./backend/routes/api/users"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./frontend/build", "index.html"));
});

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
