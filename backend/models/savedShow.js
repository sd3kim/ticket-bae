const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedShowsSchema = new Schema(
  {
    items: [
      {
        events: {
          name: String,
          //   date: { type: Schema.Types.ObjectId, ref: "Category" },
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
