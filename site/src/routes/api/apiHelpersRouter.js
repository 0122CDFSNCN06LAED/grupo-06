const express = require("express");
const router = express.Router();

const apiHelperController = require("../../controllers/api/helperAPIController");

router.get("/", apiHelperController.list);
router.get("/last", apiHelperController.lastHelper);
router.get("/:id", apiHelperController.detail);

module.exports = router;
