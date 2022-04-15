const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/login", function (req, res) {
  //           console.log(__dirname);
  let htmlPath = path.resolve("./views/user/login.html");
  res.sendFile(htmlPath);
});

router.get("/register", function (req, res) {
  //           console.log(__dirname);
  let htmlPath = path.resolve("./views/user/register.html");
  res.sendFile(htmlPath);
});

module.exports = router;
