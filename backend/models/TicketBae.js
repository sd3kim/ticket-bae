const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicketBaeSchema = new Schema(
  {
    name: String,
    location: String,
    startDate: String,
    endDate: String,
  },
  {
    timestamps: true,
  }
);

let TicketBaeModel = mongoose.model("TicketBae", TicketBaeSchema);
module.exports = TicketBaeModel;
