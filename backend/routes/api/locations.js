const express = require("express");
const router = express.Router();
const TicketBaeModel = require("../../models/TicketBae");
const LocationsCtrl = require("../../controllers/api/locations");

router.get("/locations", LocationsCtrl.getLocations);

module.exports = router;
