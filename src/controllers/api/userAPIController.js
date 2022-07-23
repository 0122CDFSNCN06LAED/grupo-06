const db = require("../../database/models");

const userAPIController = {
  list: (req, res) => {
    // agregar el resto de los atributos
    db.User.findAll({
      attributes: [
        "id",
        [
          db.User.sequelize.fn(
            "CONCAT",
            db.User.sequelize.col("first_name"),
            " ",
            db.User.sequelize.col("last_name")
          ),
          "full_name",
        ],
        "email",
        [
          db.User.sequelize.fn("CONCAT", "localhost:3000/api/users/",db.User.sequelize.col("id")),
          "detail_url",
        ],
      ],
    }).then((users) => {
      let respuesta = {
        count: users.length,
        users,
      };
      res.json(respuesta);
    });}
//  agregar método para traer detalle
};

module.exports = userAPIController;
