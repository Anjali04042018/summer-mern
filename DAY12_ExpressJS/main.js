const express = require('express')
const fsPromises = require('fs/promises')
const app = express();

app.use(express.json());
app.get("/products",async (req, res) =>{
    const text = await fsPromises.readFile("./data.json", {encoding:"utf8"});
    // const products = JSON.parse(text);
    // res.json({
    //     status: "Success...",
    //     data:{
    //         products: products,
    //     }
    // });
    let products;
    try{
        products = JSON.parse(text);
    }catch(err){
        product= [];
    }

    
    res.json({
        status:"Success",
        data:{
            products: products,
        },
    })
});

const getData = async () =>{
    const text = await fsPromises.readFile("./data.json", {endoding:"utf8"});
    let product;
    try{
        products= JSON.parse(text);
    }
    catch{
        products = [];
    }
    return products;
}

app.get("/products", async (req,res) =>{
    let products = await getData();

    res.json({
        status:"success",
        data:{
            products: products,
        },
    });
});

// app.post("/products",async (res,req) =>{
//     // console.log(typeof req);
//     // console.log(Object.keys(req));
//     // console.log(body);

//     const body = req.body;
//     const products = await getData();
//     // const prlen = products.length;
//     // const lastIndex = prlen-1;
//     // const lastItem = products[lastIndex];
//     // const lastId = lastItem.id;
//      console.log(products)
//     let lastId = 0;
//     if(products.length != 0){
//         lastId = products[products.length -1].id;
//     }
//     body.id = lastId +1;
//     products.push(body);
//     await fsPromises.writeFile("./data.json", JSON.stringify(products));
//     res.status(201);
//     res.json({
//         status: "Success",
//         data:{
//             products:body,
//         }
//     });
// });
app.post("/products", async (req, res) => {
    // console.log(typeof req);
    // console.log(Object.keys(req));
    // console.log(body);
    const body = req.body;
    const products = await getData();
    // const prLen = products.length;
    // const lastIndex = prLen - 1;
    // const lastItem = products[lastIndex];
    // const lastId = lastItem.id;
    let lastId = 0;
    if (products.length != 0) {
        lastId = products[products.length - 1].id;
    }
    body.id = lastId + 1;
    products.push(body);
    await fsPromises.writeFile("./data.json", JSON.stringify(products));

    res.status(201);
    res.json({
        status: "success",
        data: {
            product: body,
        },
    });
});

app.put("/products/:id" , (req,res) =>{
    const param = req.params;
    console.log(param);
    const body = req.body;
    console.log(body);

    res.send({
        status: "In progress",
    })
})
app.listen(1400);