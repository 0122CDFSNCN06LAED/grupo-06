const path = require("path");

const productsController = {
  detail: function (req, res) {
    let htmlPath = path.resolve("./src/views/products/productDetail.ejs");
    res.render(htmlPath);
  },
  add: function (req, res) {
    let htmlPath = path.resolve("./src/views/products/registerHelper.ejs");
    res.render(htmlPath);
  },
};

module.exports = productsController;
