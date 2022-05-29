const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");

const guestMiddleware = require("../middleware/guestMiddleware.js");


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/avatars");
  },
  filename: (req, file, cb) => {
    let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
    cb(null, fileName);
  },
});

const uploadFile = multer({ storage });

const productsController = require("../controllers/productsController.js");

router.get("/", productsController.index);

router.get("/detail/:id", productsController.detail);

router.get("/registerHelper", guestMiddleware, productsController.add);

router.post("/store", uploadFile.single("avatar"), productsController.store);

router.get("/editHelper/:id", guestMiddleware, productsController.edit);
router.put("/:id", productsController.update);

router.delete("/delete/:id", productsController.erase);

module.exports = router;
