const express = require("express");
const router = express.Router();
const path = require("path");
const { check } = require("express-validator");
const validationRegister = [
  check("Nombre")
    .notEmpty()
    .withMessage("Debes escribir un nombre")
    .bail()
    .isLength({ min: 2 })
    .withMessage("Debes escribir más de 2 caracteres"),

  check("Apellido")
    .notEmpty()
    .withMessage("Debes escribir un apellido")
    .bail()
    .isLength({ min: 2 })
    .withMessage("Debes escribir más de 2 caracteres"),

  check("Telefono")
    .notEmpty()
    .withMessage("Debes escribir un teléfono")
    .bail()
    .isLength({ min: 2 })
    .withMessage("Debes escribir más de 2 caracteres"),

  check("userImage").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".png", ".gif"];
    let fileExtensions = path.extname(file.originalname);
    if (!file) {
      throw new Error("Tienes que subir una imagen");
    } else {
      if (!acceptedExtensions.includes(fileExtensions)) {
        throw new Error("La imagen debe tener extensión PNG, JPG o GIF");
      }
    }

    return true;
  }),

  check("email")
    .isEmail()
    .withMessage("Debes escribir un mail válido")
    .bail()
    .notEmpty()
    .withMessage("Debes escribir un mail"),
  //check("email").), #agregar que no sea un mail ya agregado*

  check("confirmEmail")
    .isEmail()
    .withMessage("Debes escribir un mail válido")
    .bail()
    .notEmpty()
    .withMessage("Debes escribir un mail"),
  //check("confirm-email") *

  check("password")
    .notEmpty()
    .withMessage("Debes escribir una contraseña")
    .bail()
    .isLength({ min: 8 })
    .withMessage("Debes escribir más de 8 caracteres"),

  check("confirmPassword")
    .notEmpty()
    .withMessage("Debes escribir una contraseña")
    .bail()
    .isLength({ min: 8 })
    .withMessage("Debes escribir más de 8 caracteres"),
];

const validations = [
  check("email").notEmpty().withMessage("Ingrese Un Usuario"),
  check("email").isEmail().withMessage("Email Invalido"),
  check("password").notEmpty().withMessage("Ingrese una Contraseña"),
];

const multer = require("multer");

const loginValidations = require("../validations/loginValidations.js");
const urlencoded = require("express");

const guestMiddleware = require("../middleware/guestMiddleware.js");
const authMiddleware = require("../middleware/authMiddleware.js");

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

router.get("/login", authMiddleware, userController.login);
router.post("/login", validations, userController.processLogin);

router.get("/registerUser", authMiddleware, userController.register);

//router.get("/registerUserOrHelper", userController.registerUserOrHelper);
//router.get("/registerUser", userController.addUser);
router.get("/profile", guestMiddleware, userController.profile);

router.post(
  "/storeUser",
  uploadFile.single("userImage"),
  validationRegister,
  userController.storeUser
);

router.get("/signOut", guestMiddleware, userController.signOut);

module.exports = router;
