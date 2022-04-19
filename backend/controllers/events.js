async function catsIndex(req, res) {
  console.log("hi");
  try {
    let cats = await CategoryModel.find(); // 1. grab all cats from DB
    res.status(200).json(cats); // 2. send to frontend
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  catsIndex,
};
