const express = require("express");
const router = express.Router();
const path = require("path");
const {check} = require("express-validator")

const userController = require("../controllers/userController.js");

router.get("/login", userController.login);
router.get("/registerUser", userController.register);
//router.get("/registerUserOrHelper", userController.registerUserOrHelper);
//router.get("/registerUser", userController.addUser);
router.post("/storeUser", userController.storeUser);
router.post("/login", [check("email").isEmail().withMessage("Email Invalido"),check("password").isLength({
    min:8                                                                   
}).withMessage("la contraseña debe tener 8 caracteres")],userController.processLogin)

module.exports = router;
