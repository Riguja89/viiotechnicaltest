const mongoose = require("mongoose");
require("dotenv").config();

const username = encodeURIComponent(process.env.MONGODB_USER);
const password = encodeURIComponent(process.env.MONGODB_PASSWORD);

mongoose.set("strictQuery", true);

mongoose
  .connect(
    `mongodb://${username}:${password}@cluster0-shard-00-00.ixo4j.mongodb.net:27017,cluster0-shard-00-01.ixo4j.mongodb.net:27017,cluster0-shard-00-02.ixo4j.mongodb.net:27017/viio?ssl=true&replicaSet=atlas-1vbfou-shard-0&authSource=admin&retryWrites=true&w=majority`
  )
  .then(() => console.log("conetado a Mongo"))
  .catch((error) => console.error(error));
