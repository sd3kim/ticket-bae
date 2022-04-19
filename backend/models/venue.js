const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const venueSchema = new Schema({
  name: String,
});
module.exports = mongoose.model("Venue", venueSchema);
