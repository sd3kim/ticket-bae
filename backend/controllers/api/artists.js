const { query } = require("express");
const TicketBaeModel = require("../../models/TicketBae");

function getArtists(req, res) {
  console.log("Hello world");
  res.send("Hi");
}

module.exports = {
  getArtists,
};
