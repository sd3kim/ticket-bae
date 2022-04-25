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
  console.log("req.user: ", req.user);
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

async function update(req, res) {
  try {
    let shows = await savedShowsModel.findOne({ user: req.user._id });
    console.log("this is update of controller", shows);
  } catch (err) {}
}
module.exports = {
  create,
  index,
  update,
};
