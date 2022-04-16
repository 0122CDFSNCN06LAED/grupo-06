const express = require("express");
const router = express.Router();
const path = require("path");

const mainController = require("../controllers/mainController.js")

router.get("", mainController.index);
router.get("/check-out", mainController.checkout);

module.exports = router;
