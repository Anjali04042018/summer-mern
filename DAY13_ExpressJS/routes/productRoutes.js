const express = require("express");
const {
    getProducts,
    createProduct,
    replaceProduct,
    deleteProduct,
    updateProduct,
    validateForTitalANdPrice,
    getDataMiddleware,
    validateId
} = require("../controllers/productControllers.js");

const productRouter = express.Router();

productRouter.use(getDataMiddleware);

productRouter.route("/").get(getProducts).post(validateForTitalANdPrice,createProduct);

productRouter.route("/:id").put(validateId,validateForTitalANdPrice,replaceProduct).patch(validateId,updateProduct).delete(validateId,deleteProduct);

module.exports = productRouter;