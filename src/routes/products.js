const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/check-out", function (req, res) {
  //           console.log(__dirname);
  let htmlPath = path.resolve("./views/products/check-out.html");
  res.sendFile(htmlPath);
});

router.get("/productDetail", function (req, res) {
  //           console.log(__dirname);
  let htmlPath = path.resolve("./views/products/productDetail.html");
  res.sendFile(htmlPath);
});

module.exports = router;
