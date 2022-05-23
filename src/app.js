const express = require("express");
const path = require("path");
const app = express();
const methodOverride = require("method-override");

const session = require('express-session')
const {check} = require("express-validator")


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("./public"));

app.set("view engine", "ejs");

app.set("views", __dirname + "/src/views");

app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
  secret: 'helper crud'
}))

const rutasUser = require("./routes/user");
app.use("/user", rutasUser);

const rutasProducts = require("./routes/products");
app.use("/products", rutasProducts);

const rutasMain = require("./routes/main");
app.use("/", rutasMain);

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
