const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/login", function (req, res) {
  //           console.log(__dirname);
  let htmlPath = path.resolve("./views/user/login.ejs");
  res.sendFile(htmlPath);
});

router.get("/register", function (req, res) {
  //           console.log(__dirname);
  let htmlPath = path.resolve("./views/user/register.ejs");
  res.sendFile(htmlPath);
});

module.exports = router;
