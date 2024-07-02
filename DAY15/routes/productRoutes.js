const express = require('express');
const { getProducts, createProduct, replaceProduct,checkId,updateProduct, DeleteProduct,listProduct} = require('../controllers/productControllers');
const productRouter = express.Router();


productRouter.route("/").get(getProducts).post(createProduct);

productRouter.route("/list").get(listProduct)
    
productRouter.route("/:id").put(checkId,replaceProduct).patch(checkId,updateProduct). delete(checkId,DeleteProduct);

module.exports = productRouter;


