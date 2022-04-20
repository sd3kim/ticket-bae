const express = require("express");
const router = express.Router();
const artistsCtrl = require("../../controllers/api/artists");

router.get("/", artistsCtrl.getArtists);

module.exports = router;
