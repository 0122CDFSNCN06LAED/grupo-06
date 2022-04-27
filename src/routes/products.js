const express = require("express");
const router = express.Router();
const path = require("path");

const productsController = require("../controllers/productsController.js");

router.get("/", productsController.index);

router.get("/productDetail", productsController.detail);

router.get("/registerHelper", productsController.add);

router.post("/store", productsController.store);

router.get("/editHelper/:id", productsController.edit);
router.put("/:id", productsController.update);

router.delete("/delete/:id", productsController.erase);

module.exports = router;
