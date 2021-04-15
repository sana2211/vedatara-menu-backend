require('dotenv').config();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const express  = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRouter = require('./users/userRoutes');
const restaurantRouter = require('./restaurants/restaurantRoutes');
const cors = require('cors')
const knex = require('knex')
const db =knex({
    client: 'pg',
    connection:'postgres://mlyuurfwtyedfh:92ff09043eabd0824d9d8bb99946669f1cc83ad094704972dc51765c2700a9a3@ec2-52-44-139-108.compute-1.amazonaws.com:5432/de8fhncugherm3?ssl=true',
  });

app.use(bodyParser());
app.use(cors());
app.set('db', db);
app.use('/api/users', userRouter);
app.use('/api/restaurants', restaurantRouter);
/*app.get('/', (req, res)=>{
    res.status(200).send("Hello, World!")
})*/

module.exports = app