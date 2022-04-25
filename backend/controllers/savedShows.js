const savedShowsModel = require("../models/savedShow");

async function index(req, res) {
  try {
    let shows = await savedShowsModel
      .find({ user: req.user._id })
      .sort({ createdAt: "desc" })
      .exec();
    res.status(200).json(shows);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function create(req, res) {
  try {
    await savedShowsModel.create({
      savedItem: req.body.savedItem,
      user: req.user._id,
    });
    console.log("message: ", req.body.savedItem);
    res.status(200).json("ok");
  } catch (err) {
    console.log("This is the controller error: ", err);
    res.status(400).json(err);
  }
}

async function deleteShow(req, res) {
  try {
    await savedShowsModel.findByIdAndDelete(req.body.savedItem._id);
    console.log("id has been found");
    console.log("message: ", req.body.savedItem._id);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  create,
  index,
  delete: deleteShow,
};
