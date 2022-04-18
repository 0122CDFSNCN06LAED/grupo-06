const path = require("path");

const userController = {
  login: function (req, res) {
    let htmlPath = path.resolve("./src/views/user/login.ejs");
    res.render(htmlPath);
  },
  register: function (req, res) {
    let htmlPath = path.resolve("./src/views/user/register.ejs");
    res.render(htmlPath);
  }
};

module.exports = userController;