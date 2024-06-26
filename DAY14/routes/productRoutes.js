const express = require("express");
const {getProduct, createProduct} = require("../controllers/productControllers.js")

const productRoutes = express.Router();
productRoutes.route("/")
.get(getProduct)
.post(createProduct)

module.exports = productRoutes;
