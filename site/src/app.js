const express = require("express");
const path = require("path");
const app = express();
const methodOverride = require("method-override");
const cors = require("cors");


const session = require('express-session')
const {check} = require("express-validator")

app.use(cors("*"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("./public"));

app.set("view engine", "ejs");

app.set("views", __dirname + "/src/views");

app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
  secret: 'helper crud',
  resave: false,
  saveUninitialized: false
}))

const rutasUser = require("./routes/user");
app.use("/user", rutasUser);

const rutasProducts = require("./routes/products");
app.use("/products", rutasProducts);

const rutasMain = require("./routes/main");
app.use("/", rutasMain);

const rutasUserAPI = require("./routes/api/apiUsersRouter")
app.use("/api/users", rutasUserAPI);


app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});

