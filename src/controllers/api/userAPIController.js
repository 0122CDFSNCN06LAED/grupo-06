const db = require("../../database/models");

const userAPIController = {
  list: (req, res) => {
    // agregar el resto de los atributos
    db.User.findAll({ attributes: ["id", "first_name", "last_name"] }).then(
      (users) => {
        let respuesta = {
          count: users.length,
          users,
        };
        res.json(respuesta);
      }
    );}
//  agregar método para traer detalle
};

module.exports = userAPIController;
