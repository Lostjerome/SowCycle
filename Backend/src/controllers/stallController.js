const stallModel = require("../models/stallModel");

module.exports.getAllStalls = async (req, res) => {
  try {
    const stalls = await stallModel.getAll();
    res.status(200).json(stalls);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports.addStall = async (req, res) => {
  const { number } = req.body;
  if (!number) return res.status(400).json({ error: "Missing stall number" });
  try {
    stallModel.create(number);
    res.status(201).json({ message: "Stall created" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};
