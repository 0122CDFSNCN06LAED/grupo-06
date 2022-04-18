const path = require("path");

const productsController = {
  detail: function (req, res) {
    let htmlPath = path.resolve("./src/views/products/productDetail.ejs");
    res.render(htmlPath);
  },
};

module.exports = productsController;
