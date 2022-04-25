const express = require("express");
const router = express.Router();
const path = require("path");

const productsController = require("../controllers/productsController.js");

router.get("/productDetail", productsController.detail);

router.get("/registerHelper", productsController.add);

module.exports = router;
