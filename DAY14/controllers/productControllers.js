const {productsCollection } = require("../database/db.js")

const getProduct = async (req,res) =>{
const products = await productsCollection.find().toArray();
res.json({
    status: "success",
    data:{
        products: products,
    }
})
};

const createProduct = async(req, res) =>{
    const body = req.body;
    if(!body.title || !body.price){
        res.status(400);
        res.json({
            status: "Fail",
            message:"Title and price are required",
        });
        return;
    }
    const result = await productsCollection.insertOne(body);
    res.json({
        status:"Success",
        data:{
            product: result,
        }
    })
};
module.exports = {
    getProduct,
    createProduct,
}