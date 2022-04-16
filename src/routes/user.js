const express = require("express");
const router = express.Router();
const path = require("path");

const userController = require("../controllers/userController.js");

router.get("/login", userController.login);
router.get("/register", userController.register);

module.exports = router;
