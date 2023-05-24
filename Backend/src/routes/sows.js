const express = require("express");
const router = express.Router();
const sowController = require("../controllers/sowController");

router.get("/", sowController.getSowsByPage);
router.get("/:id", sowController.getSowById);
router.post("/", sowController.addSow);
router.put("/:id", sowController.updateSow);
router.delete("/:id", sowController.deleteSow);

module.exports = router;
