const express = require("express");
const router = express.Router();
const stallController = require("@controllers/stallController");

router.get("/", stallController.getAllStalls);
router.post("/", stallController.addStall);
router.put("/:_id", stallController.updateStall);
router.delete("/:_id", stallController.deleteStall);

module.exports = router;
