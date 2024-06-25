const express = require("express");
var morgon = require("morgan")
const productRouter = require("./routes/productRoutes.js");

// Internal middleware
const app = express();

// Custom middleware
app.use(express.json());
app.use((req,res,next) =>{
    res.set({"Server-time": Date.now()});
    console.log(req.url, req.method);
    next();
});

// External middleware

app.use(morgon("dev"));

app.use("/products", productRouter);


app.listen(1400);