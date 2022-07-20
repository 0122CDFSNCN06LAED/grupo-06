const express = require("express");
const router = express.Router();

const apiUserController = require('../../controllers/api/userAPIController');

router.get("/", apiUserController.list);

module.exports = router;


