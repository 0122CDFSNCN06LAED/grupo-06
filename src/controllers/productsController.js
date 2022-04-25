const path = require("path");
const fs = require("fs");

const productsFilePath = path.join(__dirname, "../database/products.json");

const helpers = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productsController = {
  detail: function (req, res) {
    let htmlPath = path.resolve("./src/views/products/productDetail.ejs");
    res.render(htmlPath);
  },
  add: function (req, res) {
    let htmlPath = path.resolve("./src/views/products/registerHelper.ejs");
    res.render(htmlPath);
  },
  edit: function (req,res){
    const id = req.params.id;
    const helper = helpers.find((p) => id == p.id);
    let htmlPath = path.resolve("./src/views/products/editHelper.ejs");
    res.render(htmlPath, {
      helper
    })
  }
};

module.exports = productsController;
