const savedShowsModel = require("../models/savedShow");

module.exports = {
  create,
  index,
};

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
    await savedShowsModel.create({ items: req.body.items, user: req.user._id });
    console.log(req.body.items);
    res.status(200).json("ok");
  } catch (err) {
    res.status(400).json(err);
  }
}
