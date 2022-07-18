const path = require("path");
const fs = require("fs");
const { text } = require("express");
const { validationResult } = require("express-validator");

const productsFilePath = path.join(__dirname, "../database/products.json");

const helpers = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const db = require("../database/models");

const productsController = {
  index: (req, res) => {
    let htmlPath = path.resolve("./src/views/products/products.ejs");
    db.Helper.findAll({ include: ["user", "oficio"] })
      .then((helper) => {
        res.render(htmlPath, {
          products: helper,
          user: req.session.usuariologueado,
        });
      })
      .catch((err) => {
        return res.send(err);
      });
    // //
    // let productsFilePath = path.join(__dirname, "../database/products.json");
    // let helpers = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

    // let htmlPath = path.resolve("./src/views/products/products.ejs");
    // res.render(
    //   htmlPath, {
    //   products: helpers,
    //   //products porque se llama así en la vista
    // user: req.session.usuariologueado
    // });
  },

  detail: function (req, res) {
    let htmlPath = path.resolve("./src/views/products/productDetail.ejs");
    db.Helper.findByPk(req.params.id, { include: ["user"] }).then((helper) => {
      res.render(htmlPath, {
        product: helper,
        user: req.session.usuariologueado,
      });
    });
    // let productsFilePath = path.join(__dirname, "../database/products.json");
    // let helpers = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

    // const id = req.params.id;
    // const helper = helpers.find((product) => product.id == id);

    // let htmlPath = path.resolve("./src/views/products/productDetail.ejs");
    // res.render(htmlPath, {
    //   product: helper,
    //   user: req.session.usuariologueado,
    // });
  },

  add: function (req, res) {
    let htmlPath = path.resolve("./src/views/products/registerHelper.ejs");
    const errors = req.session.errors;
    req.session.errors = undefined;
    
    db.Oficio.findAll().then((oficios) => {
      res.render(htmlPath, {
        user: req.session.usuariologueado,
        oficios: oficios,
        errors:errors
      });
    });
  },

  store: (req, res) => {
    //res.send(req.body);
    const errors = validationResult(req);
    if (errors.isEmpty()){
      db.Helper.create({
        calle: req.body.calle,
        numero: req.body.numero,
        barrio: req.body.barrio,
        provincia: req.body.provincia,
        codigo_postal: req.body.codigoPostal,
        mas_buscados: "0",
        anos_de_experiencia: req.body.añosDeExperiencia,
        tarifa: req.body.tarifa,
        descripcion: req.body.descripcion,
        usuario_id: req.session.usuariologueado.id,
        oficio_id: req.body.oficio,
      }).then(() => {
        db.Helper.findOne({
          where: { usuario_id: req.session.usuariologueado.id },
        }).then((helper) => {
          res.redirect("/products/detail/" + helper.id);
        });
      });

      // si el usuario tiene perfil user - lo actualizo a Helper
      db.User.findByPk(req.session.usuariologueado.id).then((usuario) => {
        if (usuario.profile_id == 2) {
          db.User.update(
            {
              profile_id: "3",
            },
            {
              where: { id: req.session.usuariologueado.id },
            }
          ).then(() => {
            req.session.usuariologueado.profile_id = 3;
          });
        }
      });
    } else {
      // let htmlPath = path.resolve("./src/views/products/registerHelper.ejs");
      // db.Oficio.findAll().then((oficios) => {
      // res.render(htmlPath, {
      //   errors: errors.errors,
      //   user: req.session.usuariologueado,
      //   oficios: oficios
      // })})
      req.session.errors = errors.mapped();
      res.redirect("/products/registerHelper");
    };

    

    // const lastIndex = helpers.length - 1;
    // const lastProduct = helpers[lastIndex];
    // const biggestId = lastProduct ? lastProduct.id : 0;
    // const newId = biggestId + 1;

    // const newProduct = {
    //   ...req.body,
    //   ...req.file,
    //   id: newId,
    // };

    // helpers.push(newProduct);

    // const jsonTxt = JSON.stringify(helpers, null, 2);
    // fs.writeFileSync(productsFilePath, jsonTxt, "utf-8");
  },

  //edit: function (req, res) {
  //const id = req.params.id;
  //const helper = helpers.find((p) => id == p.id);

  //let htmlPath = path.resolve("./src/views/products/editHelper.ejs");
  //res.render(htmlPath, {
  // helper,
  // user: req.session.usuariologueado,
  // });
  // },
  update: function (req, res) {
    const id = req.params.id;

    const helper = helpers.find((p) => id == p.id);

    Object.assign(helper, {
      ...req.body,
    });

    const jsonTxt = JSON.stringify(helpers, null, 2);
    fs.writeFileSync(productsFilePath, jsonTxt, "utf-8");

    res.redirect("/products/");
  },

  //Edit Database

  edit: function (req, res) {
    const errors = req.session.errors;
    req.session.errors = undefined;
    db.Helper.findOne({
      where: { id: req.params.id },
      include: ["user", "oficio"],
    }).then((helper) => {
      db.Oficio.findAll().then((oficios) => {
        let htmlPath = path.resolve("./src/views/products/editHelper.ejs");
        res.render(htmlPath, {
          helper: helper,
          oficios: oficios,
          user: req.session.usuariologueado,
          errors: errors
        });
      });
    });
  },

  listByOficio: (req, res) => {
    let htmlPath = path.resolve("./src/views/products/listByOficio.ejs");
    db.Helper.findAll({
      where: {
        oficio_id: req.params.id,
      },

      include: ["user", "oficio"],
    })
      .then((helpers) => {
        res.render(htmlPath, {
          helpers,
          user: req.session.usuariologueado,
        });
      })
      .catch((err) => {
        return res.send(err);
      });
  },

  listOficio: (req, res) => {
    let htmlPath = path.resolve("./src/views/products/oficios.ejs");
    db.Oficio.findAll()
      .then((oficios) => {
        res.render(htmlPath, {
          oficios,
          user: req.session.usuariologueado,
        });
      })
      .catch((err) => {
        return res.send(err);
      });
  },

  erase: function (req, res) {
    db.Helper.findOne({
      where: { id: req.params.id },
    })
      .then((helperToDelete) => {
        db.Helper.destroy({
          where: { id: req.params.id },
        });
      })
      .then(() => {
        res.redirect("/products");
      });
  },

  // let productsFilePath = path.join(__dirname, "../database/products.json");
  // let helpers = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

  // const id = req.params.id;
  // const helper = helpers.filter((product) => product.id != id);

  // const jsonTxt = JSON.stringify(helper, null, 2);
  // fs.writeFileSync(productsFilePath, jsonTxt, "utf-8");
};

module.exports = productsController;
