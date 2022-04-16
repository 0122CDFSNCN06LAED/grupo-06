const path = require("path");

const productsController = {
  detail: function (req, res) {
    let htmlPath = path.resolve("./views/products/productDetail.ejs");
    res.render(htmlPath);
  },
};

module.exports = productsController;
