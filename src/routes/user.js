const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");

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
router.get("/registerUser", userController.register);
//router.get("/registerUserOrHelper", userController.registerUserOrHelper);
//router.get("/registerUser", userController.addUser);
router.post(
  "/storeUser",
  uploadFile.single("userImage"),
  userController.storeUser
);

module.exports = router;
