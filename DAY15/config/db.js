// const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const uri = "mongodb+srv://<username>:<password>@cluster0.lmxofcz.mongodb.net/<dbName>?appName=Cluster0";

let dbURL = uri.replace('<username>', process.env.DB_USERNAME)
    dbURL = dbURL.replace('<password>', process.env.DB_PASSWORD)
    dbURL = dbURL.replace('<dbName>', process.env.DB_NAME)


// const client = new MongoClient(dbURL);
// const database = client.db(process.env.DB_NAME);
// const productsCollection = database.collection("products");

// module.exports = {
//     productsCollection,
// }

mongoose.connect(dbURL).then(() =>{
    console.log("-------------- DB Connected ----------------");
})
.catch((err) =>{
    console.log("DB connect Failed: \n");
    console.log(err);
});