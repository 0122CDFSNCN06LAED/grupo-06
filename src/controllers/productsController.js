const path = require("path");

const productsController = {
  detail: function (req, res) {
    let htmlPath = path.resolve("./src/views/products/productDetail.ejs");
    res.render(htmlPath);
  },
  add: function(req,res){
    let htmlPath = path.resolve("./src/views/products/addProduct.ejs")
    res.render(htmlPath);
  }
};

module.exports = productsController;
