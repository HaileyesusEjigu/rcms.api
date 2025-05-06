const express = require('express');
const { getRomurById } = require('../controllers/rumorsController');
rummersController = require("../controllers/rumorsController");
const rummersRouter = express.Router();

rummersRouter.get("/", rummersController.getAllRumours);
rummersRouter.get("/:id", rummersController.getRomurById)
rummersRouter.put("/:id", rummersController.updateRumourById)
rummersRouter.post("/", rummersController.createNewRumour)
rummersRouter.delete("/:id", rummersController. deleteRumourById)

module.exports = rummersRouter;
