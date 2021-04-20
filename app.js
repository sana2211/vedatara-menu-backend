require('dotenv').config();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const express  = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRouter = require('./users/userRoutes');
const addressRouter = require('./users/addressRoutes');
const restaurantRouter = require('./restaurants/restaurantRoutes');
const cors = require('cors')
const knex = require('knex')
const db =knex({
    client: 'pg',
    connection:'postgres://fzyvkhbcrlpogt:35538c1afc8d98af92ebeb643fff4d7ba1c872b97ba6116f8adc375dc439eeb8@ec2-54-167-168-52.compute-1.amazonaws.com:5432/d9ia1c36hb2574?ssl=true',
  });

app.use(bodyParser());
app.use(cors());
app.set('db', db);
app.use('/api/users', userRouter);
app.use('/api/restaurants', restaurantRouter);
app.use('/api/address', addressRouter);
/*app.get('/', (req, res)=>{
    res.status(200).send("Hello, World!")
})*/

module.exports = app