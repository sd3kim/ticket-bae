var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/allEvents", function (req, res, next) {
  // res.redirect(
  //   "https://app.ticketmaster.com/discovery/v2/events.json?apikey=78AE5ANtw2O28XJJoxZn6gnMwJG0pOEc"
  // );
  // console.log("Hi");
  res.render("index", { title: "Express" });
});

module.exports = router;
