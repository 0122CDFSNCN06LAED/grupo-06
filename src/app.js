const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("../public"));

app.set("view engine", "ejs");

app.set("views", __dirname + "/src/views");

const rutasUser = require("./routes/user");
app.use("/user", rutasUser);

const rutasProducts = require("./routes/products");
app.use("/products", rutasProducts);

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});

app.get("/", function (req, res) {
  //           console.log(__dirname);
  let htmlPath = path.resolve(__dirname, "./views/index.ejs");
  res.sendFile(htmlPath);
});
