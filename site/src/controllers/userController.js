const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const { text } = require("express");
const { validationResult } = require("express-validator");
const userFilePath = path.join(__dirname, "../database/users.json");

const user = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));
const db = require("../database/models");

const userController = {
  login: function (req, res) {
    let htmlPath = path.resolve("./src/views/user/login.ejs");
    res.render(htmlPath, { user: req.session.usuariologueado });
  },
  processLogin: function (req, res) {
    let error = validationResult(req);
    if (error.isEmpty()) {
      // const userFilePath = path.join(__dirname, "../database/users.json");
      // const user = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));

      db.User.findOne({
        where: { email: req.body.email },
      }).then((user) => {
        const check = bcrypt.compareSync(req.body.password, user.password);
        if (check) {
          usuarioAlloguearse = user;
          req.session.usuariologueado = usuarioAlloguearse;
          req.session.idUsuario = user.id;
          res.redirect("../");
        } else {
          let htmlPath = path.resolve("./src/views/user/login.ejs");
          res.render(htmlPath, {
            errors: [
              {
                msg: "credenciales invalidas",
              },
            ],
            user: req.session.usuariologueado,
          });
        }
      })
      .catch(() => {
        let htmlPath = path.resolve("./src/views/user/login.ejs");
        res.render(htmlPath, {
          errors: [
            {
              msg: "credenciales invalidas",
            },
          ],
          user: req.session.usuariologueado,
        });
      });
    } else {
      let htmlPath = path.resolve("./src/views/user/login.ejs");
      res.render(htmlPath, {
        errors: error.errors,
        user: req.session.usuariologueado,
      });
    }
  },

  register: function (req, res) {
    let htmlPath = path.resolve("./src/views/user/registerUser.ejs");
    res.render(htmlPath, { user: req.session.usuariologueado });
  },

  //addUser: function (req, res) {
  //  let htmlPath = path.resolve("./src/views/user/registerUser.ejs");
  //  res.render(htmlPath);
  //},
  profile: function (req, res) {
    let htmlPath = path.resolve("./src/views/user/profile.ejs");

    res.render(htmlPath, { user: req.session.usuariologueado });
  },

  //storeUser: (req, res) => {
  //res.send(req.body);

  //const lastIndex = user.length - 1;
  //const lastUser = user[lastIndex];
  //const biggestId = lastUser ? lastUser.id : 0;
  //const newUserID = biggestId + 1;

  //const newUser = {
  //id: newUserID,
  //firstName: req.body.Nombre,
  //lastName: req.body.Apellido,
  //phone: req.body.Telefono,
  //email: req.body.email,
  //password: bcrypt.hashSync(req.body.password, 10),
  //...req.file,
  //};

  //user.push(newUser);

  //const jsonTxt = JSON.stringify(user, null, 2);
  //fs.writeFileSync(userFilePath, jsonTxt, "utf-8");

  //res.redirect("/user/login");
  // },

  //creación de usuarios (base de datos)

  storeUser: function (req, res) {
    const errors = validationResult(req);
    let htmlPath = path.resolve("./src/views/user/registerUser.ejs");
    if (errors.isEmpty()) {
      db.User.create({
        first_name: req.body.Nombre,
        last_name: req.body.Apellido,
        phone: req.body.Telefono,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        profile_id: 2,
        field_name: req.file.fieldname,
        original_name: req.file.originalname,
        encoding: req.file.encoding,
        mimetype: req.file.mimetype,
        destination: req.file.destination,
        filename: req.file.filename,
        path: req.file.path,
        size: req.file.size,
      });

      res.redirect("/user/login");
    } else {
      return res.render(htmlPath, {
        errors: errors.mapped(),
        user: req.session.usuariologueado,
      });
    }
  },

  registerUserOrHelper: function (req, res) {
    let htmlPath = path.resolve("./src/views/user/registerUserOrHelper.ejs");
    res.render(htmlPath, { user: req.session.usuariologueado });
  },

  signOut: function (req, res) {
    req.session.destroy(function () {
      res.redirect("/user/login");
    });
  },
};

module.exports = userController;
