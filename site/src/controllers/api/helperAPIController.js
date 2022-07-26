
const db = require("../../database/models");
const helperAPIController = {
  list: (req, res) => {
    db.Helper.findAll({
      include: ["user"],
    }).then((helper) => {
      // db.User.findAll({
      //   attributes: [
      //     "id",
      //     [
      //       db.User.sequelize.fn(
      //         "CONCAT",
      //         db.User.sequelize.col("first_name"),
      //         " ",
      //         db.User.sequelize.col("last_name")
      //       ),
      //       "full_name",
      //     ],
      //     "email",
      //     [
      //       db.User.sequelize.fn(
      //         "CONCAT",
      //         "localhost:3000/api/helper/",
      //         db.User.sequelize.col("id")
      //       ),
      //       "detail_url",
      //     ],
      //   ],
      // }).then((user) => {
        let respuesta = {
          count: helper.length,

          helper,
          //user,
        };
        res.json(respuesta);
      });
    }
    //);
  };
//};

module.exports = helperAPIController;
