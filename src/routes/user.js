const express = require("express");
const router = express.Router();
const path = require("path");
const {check} = require("express-validator")

const validations = [
  check("email").notEmpty().withMessage("Email Invalido"),
  check("password").notEmpty(),
];

const userController = require("../controllers/userController.js");

router.get("/login", userController.login);
router.get("/registerUser", userController.register);
//router.get("/registerUserOrHelper", userController.registerUserOrHelper);
//router.get("/registerUser", userController.addUser);
router.post("/storeUser", userController.storeUser);
router.post("/login", validations, userController.processLogin);

module.exports = router;
