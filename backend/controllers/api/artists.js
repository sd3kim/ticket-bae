// const { query } = require("express");
const TicketBaeModel = require("../../models/TicketBae");
const axios = require("axios");
require("dotenv").config();

function getArtists(req, res) {
  console.log("Hello");
  res.send("Hi");
}

module.exports = {
  getArtists,
};
