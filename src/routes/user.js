const express = require("express");
const router = express.Router();
const path = require("path");

const userController = require("../controllers/userController.js");

router.get("/login", userController.login);
router.get("/registerUser", userController.register);
//router.get("/registerUserOrHelper", userController.registerUserOrHelper);
//router.get("/registerUser", userController.addUser);
router.post("/storeUser", userController.storeUser);
module.exports = router;
