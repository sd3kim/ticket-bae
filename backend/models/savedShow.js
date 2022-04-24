const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedShowsSchema = new Schema(
  {
    savedItem: [
      {
        event: {
          name: { type: String },
          qty: Number,
        },
      },
    ],
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

let savedShowsModel = mongoose.model("SavedShow", savedShowsSchema); // .model compiles the schema into a model
module.exports = savedShowsModel;
