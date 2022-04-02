const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});

app.get("/", function (req, res) {
  //           console.log(__dirname);
  let htmlPath = path.resolve(__dirname, "./views/index.html");
  res.sendFile(htmlPath);
});

app.get("/login", function (req, res) {
  //           console.log(__dirname);
  let htmlPath = path.resolve(__dirname, "./views/login.html");
  res.sendFile(htmlPath);
});

app.get("/register", function (req, res) {
  //           console.log(__dirname);
  let htmlPath = path.resolve(__dirname, "./views/register.html");
  res.sendFile(htmlPath);
});

app.get("/check-out", function (req, res) {
  //           console.log(__dirname);
  let htmlPath = path.join(__dirname, "./views/productDetail.html");
  res.sendFile(htmlPath);
});
