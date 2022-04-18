const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("./public"));

app.set("view engine", "ejs");

app.set("views", __dirname + "/src/views");

const rutasUser = require("./routes/user");
app.use("/user", rutasUser);

const rutasProducts = require("./routes/products");
app.use("/products", rutasProducts);

const rutasMain = require("./routes/main");
app.use("/", rutasMain);

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
