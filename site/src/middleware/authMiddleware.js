const path = require("path");

const authMiddleware = function (req, res, next) {
  if (req.session.usuariologueado) {
    
    return res.redirect("/user/profile")}
      else {
    return next();
  }
};

module.exports = authMiddleware;
