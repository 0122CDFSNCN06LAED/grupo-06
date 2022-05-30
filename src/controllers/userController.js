const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");
//const { text } = require("express");
const { validationResult } = require("express-validator");

const userFilePath = path.join(__dirname, "../database/users.json");

const user = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));

const userController = {
  login: function (req, res) {
    let htmlPath = path.resolve("./src/views/user/login.ejs");
    res.render(htmlPath, { user: req.session.usuariologueado });
  },
  processLogin: function (req, res) {
    let error = validationResult(req);
    if (error.isEmpty()) {
      const userFilePath = path.join(__dirname, "../database/users.json");
      const user = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));
      let usuarioAlloguearse = undefined;

      for (let i = 0; i < user.length; i++) {
        if (user[i].email == req.body.email) {
          if (bcrypt.compareSync(req.body.password, user[i].password)) {
            usuarioAlloguearse = user[i].firstName + " " + user[i].lastName;
            req.session.usuariologueado = usuarioAlloguearse;
            req.session.idUsuario = user[i].id;
            break;
          }
        }
      }

      if (usuarioAlloguearse == undefined) {
        let htmlPath = path.resolve("./src/views/user/login.ejs");
        res.render(htmlPath, {
          errors: [
            {
              msg: "credenciales invalidas",
            },
          ],
          user: req.session.usuariologueado,
        });
      } else {
        res.redirect("../");
      }
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

  storeUser: (req, res) => {
    const resultValidationUsers = validationResult(req);
    let htmlPath = path.resolve("./src/views/user/registerUser.ejs");

    if (resultValidationUsers.errors.length == 0) {
      const lastIndex = user.length - 1;
      const lastUser = user[lastIndex];
      const biggestId = lastUser ? lastUser.id : 0;
      const newUserID = biggestId + 1;

      const newUser = {
        id: newUserID,
        firstName: req.body.Nombre,
        lastName: req.body.Apellido,
        phone: req.body.Telefono,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        ...req.file,
      };

      user.push(newUser);

      const jsonTxt = JSON.stringify(user, null, 2);
      fs.writeFileSync(userFilePath, jsonTxt, "utf-8");
      res.redirect("/user/login");
    } else {
      return res.render(htmlPath, {
        errors: resultValidationUsers.mapped(),
        user: req.session.usuariologueado,
      });
    }
  },

  //registerUserOrHelper: function (req, res) {
  //  let htmlPath = path.resolve("./src/views/user/registerUserOrHelper.ejs");
  //  res.render(htmlPath, { user: req.session.usuariologueado });
  //},

  signOut: function (req, res) {
    req.session.destroy(function () {
      res.redirect("/user/login");
    });
  },
};

module.exports = userController;
