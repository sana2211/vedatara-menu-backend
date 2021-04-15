const express = require('express')
const restaurantService = require('./restaurantService')

const restaurantRouter = express.Router()

restaurantRouter
    .route(`/:user_id`)
    .get((req, res, next)=>{
        res.json(res.user)
    })
    .post((req, res, next)=>{
        console.log(req.body)
         const { title, description, calories, user_id } = req.body
              const newrestaurant ={
                  title,
                  description,
                  calories,
                  user_id
              };
              console.log(newrestaurant)
              restaurantService.insertNewmenu(
                req.app.get('db'),
                newrestaurant
               )
              .then(user=>{
                res
                  .status(201)
                  .json(user)
               })
               .catch(next);
   
      })
  
    .delete((req, res, next)=>{
      restaurantService.deleterestaurant(
            req.app.get('db'),
            req.params.user_id
        )
        .then(()=>{
            res.status(204).end()
        })
        .catch(next)
    })

module.exports = restaurantRouter 