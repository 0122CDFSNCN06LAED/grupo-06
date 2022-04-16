const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/productDetail", function (req, res) {
  //           console.log(__dirname);
  let htmlPath = path.resolve("./views/products/productDetail.ejs");
  res.render(htmlPath);
});

module.exports = router;
