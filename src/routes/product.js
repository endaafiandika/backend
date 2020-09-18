const express = require("express")
const controller = require('../controller/product')
const routes = express.Router()

routes.put("/", controller.Edit)
routes.post("/", controller.Add)
routes.delete("/", controller.Delete)

module.exports = routes