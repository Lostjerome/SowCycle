const express = require("express");
const router = express.Router();
const sowController = require("@controllers/sowController");

router.get("/", sowController.getAllSows);
router.get("/:_id", sowController.getSowById);
router.post("/", sowController.addSow);
router.put("/:_id", sowController.updateSow);
router.delete("/:_id", sowController.deleteSow);

module.exports = router;
