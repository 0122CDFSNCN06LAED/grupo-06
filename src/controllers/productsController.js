const path = require("path");
const fs = require("fs");
const { text } = require("express");

const productsFilePath = path.join(__dirname, "../database/products.json");

const helpers = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const db = require("../database/models");

const productsController = {
  index: (req, res) => {
    let htmlPath = path.resolve("./src/views/products/products.ejs");
    db.Helper.findAll({ include: ["user"] })
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
    db.Oficio.findAll().then((oficios) => {
      res.render(htmlPath, {
        user: req.session.usuariologueado,
        oficios: oficios,
      });
    });
  },
  store: (req, res) => {
    //res.send(req.body);

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
        );
      }
    });

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

    res.redirect("/products");
  },

  edit: function (req, res) {
    const id = req.params.id;
    const helper = helpers.find((p) => id == p.id);

    let htmlPath = path.resolve("./src/views/products/editHelper.ejs");
    res.render(htmlPath, {
      helper,
      user: req.session.usuariologueado,
    });
  },
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

  erase: function (req, res) {
    let productsFilePath = path.join(__dirname, "../database/products.json");
    let helpers = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

    const id = req.params.id;
    const helper = helpers.filter((product) => product.id != id);

    const jsonTxt = JSON.stringify(helper, null, 2);
    fs.writeFileSync(productsFilePath, jsonTxt, "utf-8");

    res.redirect("/products");
  },
};

module.exports = productsController;
