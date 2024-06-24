roducts", async (req, res) => {
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