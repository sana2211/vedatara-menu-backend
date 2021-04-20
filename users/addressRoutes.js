const express = require('express')
const AddressService = require('./addressService')

const addressRouter = express.Router()

addressRouter
    .route(`/:user_id`)
    .all((req, res, next)=>{
      AddressService.getAddress(
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
      AddressService.getAddress(
            req.app.get('db'),
            req.params.user_id
           )
          .then(user=>{
            console.log(user)
            res
              .status(200)
              .json(user)
           })
           .catch(next);
    })
    .post((req, res, next)=>{
        console.log(req.body)
        const { RestaurantName, StreetAddress, PhoneNo, City, Coutry, Timings} = req.body
              const newBookmark ={
                RestaurantName,
                StreetAddress,
                PhoneNo,
                City,
                Coutry,
                Timings
              };
              console.log(newBookmark)
              AddressService.insertNewAddress(
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
  
  



module.exports = addressRouter 