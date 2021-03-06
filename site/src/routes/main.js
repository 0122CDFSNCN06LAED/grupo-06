const express = require("express");
const router = express.Router();
const path = require("path");

const mainController = require("../controllers/mainController.js");

const guestMiddleware = require("../middleware/guestMiddleware.js");

const { route } = require("./user.js");

router.get("", mainController.index);
router.get("/check-out/:id", guestMiddleware, mainController.checkout);


router.get("/quienes-somos", mainController.info);



module.exports = router;
