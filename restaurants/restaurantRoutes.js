const express = require('express')
const RestaurantService = require('./restaurantService')

const restaurantRouter = express.Router()

restaurantRouter
    .route(`/:user_id`)
    .all((req, res, next)=>{
        RestaurantService.getrestaurants(
          req.app.get('db'),
          req.params.user_id
        )
        .then(user=>{
          if(!user){
             return res.status(404).json({
             error: {message: `None` }
              })
            }
            res.user = user
            next()
        })
        .catch(next)       
    })
    .get((req, res, next)=>{
        RestaurantService.getrestaurants(
            req.app.get('db'),
            req.params.user_id
           )
          .then(user=>{
            res
              .status(200)
              .json(user)
           })
           .catch(next);
    })
    .post((req, res, next)=>{
        console.log(req.body)
         const { title, description, calories, price, type, user_id} = req.body
              const newBookmark ={
                  title,
                  description,
                  calories,
                  price,
                  type,
                  user_id
              };
              console.log(newBookmark)
              RestaurantService.insertNewmenu(
                req.app.get('db'),
                newBookmark
               )
              .then(user=>{
                res
                  .status(201)
                  .json(user)
               })
               .catch(next);
   
      })
  
    .delete((req, res, next)=>{
      RestaurantService.deleterestaurant(
            req.app.get('db'),
            req.params.user_id
        )
        .then(()=>{
            res.status(204).end()
        })
        .catch(next)
    })


    restaurantRouter
    .route(`/`)
    .get((req, res, next)=>{
        RestaurantService.getAllrestaurants(
            req.app.get('db')
           )
          .then(user=>{
            res
              .status(200)
              .json(user)
           })
           .catch(next);
    })
    

module.exports = restaurantRouter 