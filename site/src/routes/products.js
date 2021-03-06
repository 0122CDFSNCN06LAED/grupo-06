const {Router, urlencoded} = require("express");
const router =Router();
const path = require("path");
const multer = require("multer");

const urlEncoded = urlencoded({
  extended: false,
});

const guestMiddleware = require("../middleware/guestMiddleware.js");

const registerHelperValidation = require("../validations/registerHelperValidation")

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

router.post(
  "/store",
  registerHelperValidation,
  productsController.store
);

router.get("/editHelper/:id", guestMiddleware, productsController.edit);
router.put("/:id", registerHelperValidation,productsController.update);

router.get("/oficio/:id", productsController.listByOficio);
router.get("/oficios", productsController.listOficio);

router.delete("/delete/:id", guestMiddleware, productsController.erase);

module.exports = router;
