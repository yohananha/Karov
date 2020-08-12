const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect(
      "mongodb+srv://node-rest-shop:node-rest-shop@node-rest-shop-qy06n.mongodb.net/test?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then((ans) => console.log("MongoDB is connected: " + ans.connection.host))
    .catch((arr) => console.log("Conecting to MongoDB error! " + arr));
};
