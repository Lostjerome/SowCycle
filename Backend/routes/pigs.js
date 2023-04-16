const express = require("express");
const router = express.Router();
const pigController = require("../controllers/pigController");

router.get("/", pigController.getPigsByPage);
router.get("/:id", pigController.getPigById);
router.post("/", pigController.createPig);
router.put("/:id", pigController.updatePig);
router.delete("/:id", pigController.deletePig);

module.exports = router;
