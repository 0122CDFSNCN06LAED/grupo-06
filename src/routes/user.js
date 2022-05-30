const express = require("express");
const router = express.Router();
const path = require("path");
const { check } = require("express-validator");
const { body } = require("express-validator");
const validations = [
  check("email").notEmpty().withMessage("Ingrese Un Usuario"),
  check("email").isEmail().withMessage("Email Invalido"),
  check("password").notEmpty().withMessage("Ingrese una Contraseña"),
];
const validationRegister = [
  body("Apellido").notEmpty().withMessage("Complete su apellido"),
  body("Nombre").notEmpty().withMessage("Complete su nombre"),
  body("Telefono").notEmpty().withMessage("Complete su teléfono"),
  body("email").notEmpty().withMessage("Complete su email"),
  body("confirm-email").notEmpty().withMessage("Vuelva a completar su email"),
];

const multer = require("multer");
//const { body } = require("express-validator");
const loginValidations = require("../validations/loginValidations.js");
const urlencoded = require("express");

const guestMiddleware = require("../middleware/guestMiddleware.js");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/userImage");
  },
  filename: (req, file, cb) => {
    let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
    cb(null, fileName);
  },
});

const uploadFile = multer({ storage });

const userController = require("../controllers/userController.js");

router.get("/login", userController.login);
router.post("/login", validations, userController.processLogin);

router.get("/registerUser", userController.register);
//router.get("/registerUserOrHelper", userController.registerUserOrHelper);
//router.get("/registerUser", userController.addUser);

router.post(
  "/storeUser",
  validationRegister,
  uploadFile.single("userImage"),
  userController.storeUser
);

router.get("/signOut", guestMiddleware, userController.signOut);

module.exports = router;
