const { check } = require("express-validator");

module.exports = [
  // bail corta el check
  check("calle").notEmpty().withMessage("El nombre de calle es obligatorio"),
  check("numero")
    .isInt({ min: 1 })
    .withMessage("El número de calle debe ser un número"),
  check("barrio").notEmpty().withMessage("El barrio es obligatorio"),
  check("provincia")
    .isIn(["Buenos Aires", "Córdoba", "Santa Fe", "Corrientes", "CABA"])
    .withMessage("Seleccione una provincia"),
  check("codigoPostal")
    .isInt({ min: 1 })
    .withMessage("El código postal debe ser un número de 4 dígitos")
    .isLength({
      min: 4,
      max: 4,
    })
    .withMessage("El código postal debe ser un número de 4 dígitos"),
  check("oficio").not().isIn("Oficio").withMessage("Seleccione un Oficio"),
  check("añosDeExperiencia")
    .isInt({ min: 0 })
    .withMessage("Años de Experiencia debe ser un número entero"),
  check("tarifa")
    .isInt({ min: 1 })
    .withMessage("La tarifa debe ser un número"),
  check("descripcion")
    .isLength({
      min: 20
    })
    .withMessage("La descripción debe tener al menos 20 caracteres")
];
