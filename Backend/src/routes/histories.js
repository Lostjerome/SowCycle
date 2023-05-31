const express = require("express");
const router = express.Router();
const historyController = require("@controllers/historyController");

router.get("/", historyController.getCompletedHistories);
router.get("/:_id", historyController.getHistoryById);
router.get("/sow/:_id", historyController.getSowHistories);

router.post("/", historyController.addHistory);
router.put("/:_id", historyController.updateHistory);
router.delete("/:_id", historyController.deleteHistory);

module.exports = router;
