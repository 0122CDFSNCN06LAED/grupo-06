const path = require("path");
const fs = require("fs");
const { text } = require("express");

const userFilePath = path.join(__dirname, "../database/users.json");

const user = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));

const userController = {
  login: function (req, res) {
    let htmlPath = path.resolve("./src/views/user/login.ejs");
    res.render(htmlPath);
  },
  register: function (req, res) {
    let htmlPath = path.resolve("./src/views/user/registerUser.ejs");
    res.render(htmlPath);
  },

  //addUser: function (req, res) {
  //  let htmlPath = path.resolve("./src/views/user/registerUser.ejs");
  //  res.render(htmlPath);
  //},

  storeUser: (req, res) => {
    //res.send(req.body);

    const lastIndex = user.length - 1;
    const lastUser = user[lastIndex];
    const biggestId = lastUser ? lastUser.id : 0;
    const newUserID = biggestId + 1;

    const newUser = {
      ...req.body,
      id: newUserID,
    };

    user.push(newUser);

    const jsonTxt = JSON.stringify(user, null, 2);
    fs.writeFileSync(userFilePath, jsonTxt, "utf-8");

    res.redirect("/user/login");
  },

  registerUserOrHelper: function (req, res) {
    let htmlPath = path.resolve("./src/views/user/registerUserOrHelper.ejs");
    res.render(htmlPath);
  },
};

module.exports = userController;
