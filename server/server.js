const express = require("express");
const bodyParser = require("body-parser");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const mongoose = require("mongoose");
const schema = require("./graphql/schema");
const rootValue = require("./graphql/resolvers");

const app = express();
const events = [];

app.use(bodyParser.json());

// app.use(
//   "/graphql",
//   cors(),
//   graphqlHTTP({
//     schema,
//     rootValue,
//     graphiql: true
//   })
// );

app.get("/", (req, res, next) => {
  res.send("Hello World");
});

//Port on listening
var port = process.env.port || 5500;

mongoose
  .connect(
    `mongodb://${process.env.MONGO_USER}:${
      process.env.MONGO_PASSWORD
    }@ds149744.mlab.com:49744/${process.env.MONGO_DB}`
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`App listening on PORT:${port}`);
    });
  })
  .catch(err => {
    console.log(err);
  });
