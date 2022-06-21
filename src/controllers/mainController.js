const fs = require("fs");

const path = require("path");
const productsFilePath = path.join(__dirname, "../database/products.json");

const db = require("../database/models");

const helpers = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const mainController = {
  index: function (req, res) {
    let htmlPath = path.resolve("./src/views/main/index.ejs");
    db.Helper.findAll({
      where: {
        mas_buscados: 1
      },
      include: ['user', 'oficio']
    })
      .then((helpersmasbuscados) => {
        res.render(htmlPath, {
          helpermasbuscados: helpersmasbuscados,
          user: req.session.usuariologueado,
        })
      })
    
    
    // let helpermasbuscados = helpers.filter((h) => h.masbuscados == true);
    // let htmlPath = path.resolve("./src/views/main/index.ejs");
    // res.render(htmlPath, {
    //   helpermasbuscados: helpermasbuscados,
    //   user: req.session.usuariologueado,
    // });
  },
  checkout: function (req, res) {
    let htmlPath = path.resolve("./src/views/main/check-out.ejs");
    const helpers = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    const id = req.params.id;
    const helper = helpers.find((h) => h.id == id);

    res.render(htmlPath, { helper: helper, user: req.session.usuariologueado });
  },
  info: function (req, res) {
    let htmlPath = path.resolve("./src/views/main/quienes-somos.ejs");
    res.render(htmlPath, {
      user: req.session.usuariologueado,
    });
  },
};

module.exports = mainController;
