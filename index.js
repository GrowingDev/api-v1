const express = require("express");
// const https = require('https');
const morgan = require("morgan");
const bodyParser = require("body-parser");
const collectionRouter = require("./src/collection");
const productRouter = require("./src/product");
const app = express();
// init CORS
var cors = require("cors");

const allowedOrigins = [
 // "https://www.shop.andreasbenz.org",
//  "http://shop.andreasbenz.org",
//  "http://localhost:3000",
//  "http://localhost:8081",
//  "http://localhost:8080"
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

const port = 4000;

app.use(express.static("public"));
app.use(cors('*'));
app.use(bodyParser.json());

app.use(morgan("common", { immediate: true }));

//init Routes
require("./src/routes/article.routes")(app);
require("./src/routes/collection.routes")(app);
require("./src/routes/customer.routes")(app);
require("./src/routes/print.routes")(app);
require("./src/routes/product.routes")(app);
require("./src/routes/entity.routes")(app);
// init DB
const db = require("./src/models");
db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
});






app.use("/collection", collectionRouter);
app.use("/product", productRouter);

app.listen(port, () => console.log(`Api-v1 listening on port ${port}!`));
