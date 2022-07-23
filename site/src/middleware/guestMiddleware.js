const req = require("express/lib/request");
const path = require("path");

const guestMiddleware = function(req,res, next){
    if (!req.session.usuariologueado){
        let htmlPath = path.resolve("./src/views/user/login.ejs");
        return res.render(htmlPath, { user: req.session.usuariologueado, errors: [{
           msg:('Debes hacer login para acceder a ese sitio')}]
        });
    } else {
        return next()
    }
}

module.exports= guestMiddleware;
