const express = require('express')
const restaurantService = require('./restaurantService')

const restaurantRouter = express.Router()

restaurantRouter
    .route(`/:user_id`)
    .all((req, res, next)=>{
      restaurantService.getrestaurants(
          req.app.get('db'),
          req.params.user_id
        )
        .then(user=>{
          if(!user){
             return res.status(404).json({
             error: {message: `No restaurants` }
              })
            }
            res.user = user
            next()
        })
        .catch(next)       
    })
    .get((req, res, next)=>{
        res.json(res.user)
    })
    .post((req, res, next)=>{
        console.log(req.body)
         const { title, artist, url, user_id } = req.body
              const newrestaurant ={
                  title,
                  artist,
                  url,
                  user_id
              };
              console.log(newrestaurant)
              restaurantService.insertNewrestaurant(
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