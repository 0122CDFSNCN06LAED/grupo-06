const fs = require("fs");

const path = require("path");
const productsFilePath = path.join(__dirname, "../database/products.json");

const helpers = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const mainController = {
  index: function (req, res) {
    let helpermasbuscados = helpers.filter((h) => h.masbuscados == true);
    let htmlPath = path.resolve("./src/views/main/index.ejs");
    res.render(htmlPath, {
      helpermasbuscados: helpermasbuscados,
      user: req.session.usuariologueado
    });
  },
  checkout: function (req, res) {
    let htmlPath = path.resolve("./src/views/main/check-out.ejs");
    res.render(htmlPath,{
      user: req.session.usuariologueado});
  },
};

module.exports = mainController;
