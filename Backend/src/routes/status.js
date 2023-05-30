const express = require("express");
const router = express.Router();
const statusController = require("@controllers/statusController");

router.get("/", statusController.getAllStatuses);
router.post("/", statusController.addStatus);
router.put("/:_id", statusController.updateStatus);
router.delete("/:_id", statusController.deleteStatus);

module.exports = router;
