const express = require("express");
// const https = require('https');
const morgan = require('morgan')
const bodyParser = require('body-parser')
const collectionRouter = require('./src/collection')
const productRouter = require('./src/product')
var cors = require('cors')

const allowedOrigins = ['https://www.shop.andreasbenz.org', 'http://shop.andreasbenz.org']
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

const app = express();
const port = 4000;

app.use(express.static('public'));
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({extended:false}));

app.use(morgan('common', {immediate: true}))

app.use('/collection', collectionRouter);
app.use('/product', productRouter)

app.listen(port, () => console.log(`Api-v1 listening on port ${port}!`));
