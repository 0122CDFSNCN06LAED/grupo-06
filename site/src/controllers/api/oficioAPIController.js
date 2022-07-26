const db = require("../../database/models");

const oficioAPIController = {
  list: (req, res) => {
    // agregar el resto de los atributos
    db.Oficio.findAll().then((oficios) => {
      let respuesta = {
        count: oficios.length,
        oficios,
      };
      res.json(respuesta);
    });}

}


module.exports = oficioAPIController;
