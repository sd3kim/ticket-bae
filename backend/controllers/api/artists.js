// const { query } = require("express");
const TicketBaeModel = require("../../models/TicketBae");
const axios = require("axios");
require("dotenv").config();

function getArtists(req, res) {
  console.log("Hello");
  res.send("Hi");
}

// function getArtists(req, res) {
//   const encodedParams = new URLSearchParams();
//   encodedParams.append("apiKey", "78AE5ANtw2O28XJJoxZn6gnMwJG0pOE");

//   const options = {
//     method: "POST",
//     url: "https://ticketmasterstefan-skliarovv1.p.rapidapi.com/searchEvents",
//     headers: {
//       "content-type": "application/x-www-form-urlencoded",
//       "X-RapidAPI-Host": "Ticketmasterstefan-skliarovV1.p.rapidapi.com",
//       "X-RapidAPI-Key": "08f79ec15dmshcf8f55eefd89647p126f65jsnce809921e2ad",
//     },
//     data: encodedParams,
//   };

//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// }

module.exports = {
  getArtists,
};
