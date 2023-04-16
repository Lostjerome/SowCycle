const express = require("express");
const router = express.Router();
const pigController = require("../controllers/pigController");

router.get("/", pigController.getAllPigs);
router.get("/:id", pigController.getPigById);
router.post("/", pigController.createPig);

module.exports = router;
