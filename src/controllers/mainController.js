const path = require("path");

const mainController = {
  index: function (req, res) {
    let htmlPath = path.resolve("./src/views/main/index.ejs");
    res.render(htmlPath);
  },
  checkout: function (req,res){
      let htmlPath = path.resolve("./src/views/main/check-out.ejs");
      res.render(htmlPath);
  }
};

module.exports = mainController;
