const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // return some data
  res.status(200).json({ data: "some data" });
});

router.post("/", (req, res) => {
  // create some data
});

router.put("/:id", (req, res) => {
  // update some data by ID
});

router.delete("/:id", (req, res) => {
  // delete some data by ID
});

module.exports = router;
