
const { MongoClient, ServerApiVersion } = require('mongodb');


const uri = "mongodb+srv://<username>:<password>@cluster0.lmxofcz.mongodb.net/<dbName>?appName=Cluster0";

let dbURL = uri;
dbURL = dbURL.replace("<username>", process.env.DB_USERNAME);
dbURL = dbURL.replace("<password>" , process.env.DB_PASSWORD);
dbURL = dbURL.replace("<dbName>", process.env.DB_NAME);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(dbURL);
// (dbURL, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     const database = client.db(process.env.DB_NAME);
//     const Products = database.collection("Products");
//     const res = await Products.insertOne({
//         name:"Anjali",
//     })
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } catch(err){
//     console.log(err)
//   }
//   }

// run();

const database = client.db(process.env.DB_NAME);
const productsCollection = database.collection("Products");

module.exports ={
    productsCollection,
}