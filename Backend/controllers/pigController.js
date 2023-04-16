const pigModel = require("../models/pigModel");

module.exports.getAllPigs = async (req, res) => {
  try {
    const pigs = await pigModel.getAll();
    res.status(200).json(pigs);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports.getPigById = async (req, res) => {
  try {
    const pig = await pigModel.getById(req.params.id);
    res.status(200).json(pig);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports.createPig = async (req, res) => {
  const { id, name } = req.body;
  if (!id || !name)
    return res.status(400).json({ error: "Missing pig ID or name" });
  try {
    pigModel.create(id, name);
    // return the newly created pig in the response
    const newPig = await pigModel.getById(id);
    res.status(201).json(newPig[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports.updatePig = async (req, res) => {
  const { id, name } = req.body;
  if (!id || !name)
    return res.status(400).json({ error: "Missing pig ID or name" });
  try {
    pigModel.update(id, name);
    const newPig = await pigModel.getById(id);
    res.status(201).json(newPig[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports.deletePig = async (req, res) => {
  try {
    const pig = await pigModel.remove(req.params.id);
    res.status(200).json(pig);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};
