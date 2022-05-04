const path = require("path");
const fs = require("fs");
const { text } = require("express");

const productsFilePath = path.join(__dirname, "../database/products.json");

const helpers = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productsController = {
  index: (req, res) => {
    //
    let productsFilePath = path.join(__dirname, "../database/products.json");
    let helpers = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

    let htmlPath = path.resolve("./src/views/products/products.ejs");
    res.render(htmlPath, {
      products: helpers,
      //products porque se llama así en la vista
    });
  },

  detail: function (req, res) {
    let productsFilePath = path.join(__dirname, "../database/products.json");
    let helpers = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

    const id = req.params.id;
    const helper = helpers.find((product) => product.id == id);

    let htmlPath = path.resolve("./src/views/products/productDetail.ejs");
    res.render(htmlPath, {
      product: helper,
    });
  },

  add: function (req, res) {
    let htmlPath = path.resolve("./src/views/products/registerHelper.ejs");
    res.render(htmlPath);
  },
  store: (req, res) => {
    //res.send(req.body);

    const lastIndex = helpers.length - 1;
    const lastProduct = helpers[lastIndex];
    const biggestId = lastProduct ? lastProduct.id : 0;
    const newId = biggestId + 1;

    const newProduct = {
      ...req.body,
      id: newId,
    };

    helpers.push(newProduct);

    const jsonTxt = JSON.stringify(helpers, null, 2);
    fs.writeFileSync(productsFilePath, jsonTxt, "utf-8");

    res.redirect("/products");
  },

  edit: function (req, res) {
    const id = req.params.id;

    const helper = helpers.find((p) => id == p.id);

    let htmlPath = path.resolve("./src/views/products/editHelper.ejs");
    res.render(htmlPath, {
      helper,
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
