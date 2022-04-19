const express = require("express");
const router = express.Router();
const datesCtrl = require("../../controllers/api/dates");

router.get("/", datesCtrl.getDates);

module.exports = router;
