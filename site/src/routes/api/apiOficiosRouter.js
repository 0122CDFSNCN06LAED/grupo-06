const express = require("express");
const router = express.Router();

const apiOficioController = require('../../controllers/api/oficioAPIController');

router.get("/", apiOficioController.list);

module.exports = router;


