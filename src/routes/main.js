const express = require("express");
const router = express.Router();
const path = require("path");

router.get("", function (req, res) {
  //           console.log(__dirname);
  let htmlPath = path.resolve("./views/main/index.ejs");
  res.render(htmlPath);
});

router.get("/check-out", function (req, res) {
  //           console.log(__dirname);
  let htmlPath = path.resolve("./views/main/check-out.ejs");
  res.render(htmlPath);
});


module.exports = router;
