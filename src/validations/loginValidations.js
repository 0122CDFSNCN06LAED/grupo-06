const { body } = require("express-validator");
//El camino feliz dice que body va a tener todos los datos, lo demas pgriloso

module.exports = [
    // bail corta el check
  body("usuario").notEmpty().isEmail().withMessage("Email Invalido").bail(),
  body("contraseña")
    .isLength({ min: 8 })
    .notEmpty().withMessage("la contraseña debe tener 8 caracteres"),
    
];
