const express = require('express')
rummersController = require("../controllers/rumorsController");
const rummersRouter = express.Router();

rummersRouter.get("/", rummersController.getAllRumours);

module.exports = rummersRouter;
