const express = require("express")
const product = require('./routes/product')
const routes = express.Router()

routes.use("/produk", product)

module.exports = routes