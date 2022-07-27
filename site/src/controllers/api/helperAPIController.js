
const db = require("../../database/models");
const helperAPIController = {
  list: (req,res) => {
    db.Helper.findAll({
      group: "oficio_id",
      raw: true,
      include: [
        {
          model: db.Oficio,
          attributes: [],
          as: "oficio",
        },
      ],
      attributes: [
        [db.Helper.sequelize.col("oficio.name"), "nombre_oficio"],
        [db.Helper.sequelize.col("oficio.id"), "id_oficio"],
        [
          db.Helper.sequelize.fn("COUNT", db.Helper.sequelize.col("helper.id")),
          "countOficios",
        ],
      ],
    }).then((groupOficios) => {
      db.Helper.findAll({
        include: [
          {
            model: db.User,
            attributes: [],
            as: "user",
          },
          {
            model: db.Oficio,
            attributes: [],
            as: "oficio",
          },
        ],
        attributes: [
          [db.Helper.sequelize.col("helper.id"), "Id"],
          [
            db.Helper.sequelize.fn(
              "CONCAT",
              db.Helper.sequelize.col("user.first_name"),
              " ",
              db.Helper.sequelize.col("user.last_name")
            ),
            "full_name",
          ],
          [db.Helper.sequelize.col("oficio.name"), "nombre_oficio"],
          "descripcion",
          "anos_de_experiencia",
          "tarifa",
          [
            db.Helper.sequelize.fn(
              "CONCAT",
              "localhost:3000/products/detail/",
              db.Helper.sequelize.col("helper.id")
            ),
            "detail_url",
          ],
        ],
      }).then((helper) => {
        const respuesta = {
          count: helper.length,
          group: groupOficios,
          helper,
        };
        res.json(respuesta);
      });
    });
  },

  lastHelper: (req,res) => {
    db.Helper.findAll({
      include: [
        {
          model: db.User,
          attributes: [],
          as: "user",
        },
        {
          model: db.Oficio,
          attributes: [],
          as: "oficio",
        },
      ],
      limit: 1,
      order: [["id", "DESC"]],
      attributes: [
        [db.Helper.sequelize.col("helper.id"), "Id"],
        [
          db.Helper.sequelize.fn(
            "CONCAT",
            db.Helper.sequelize.col("user.first_name"),
            " ",
            db.Helper.sequelize.col("user.last_name")
          ),
          "full_name",
        ],
        [db.Helper.sequelize.col("oficio.name"), "nombre_oficio"],
        "descripcion",
        "anos_de_experiencia",
        "tarifa",
        [
          db.Helper.sequelize.fn(
            "CONCAT",
            "localhost:3000/products/detail/",
            db.Helper.sequelize.col("helper.id")
          ),
          "detail_url",
        ],
        [
          db.Helper.sequelize.fn(
            "CONCAT",
            "/images/userImage/",
            db.Helper.sequelize.col("user.filename")
          ),
          "user_image",
        ],
      ],
    }).then((helper) => {
      const respuesta = {
        helper,
      };
      res.json(respuesta);
    });
  }
};

module.exports = helperAPIController;
