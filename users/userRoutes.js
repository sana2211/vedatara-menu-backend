const express = require('express')
const UsersService = require('./usersService')

const usersRouter = express.Router()

usersRouter
  .route('/')
  .get((req, res,next)=>{

    UsersService.getAllUsers(
      req.app.get('db')
    )
    .then(users=>{
       res.json(users)
    })
    .catch(next)
    })
    .post((req, res, next)=>{
      console.log(req.body)
       const { fullname, email, password, jobTitle, address } = req.body
            const newUser ={
                fullname,
                email,
                password,
                jobTitle,
                address
            };
            console.log(newUser)
            UsersService.insertNewUser(
              req.app.get('db'),
              newUser
             )
            .then(user=>{
              res
                .status(201)
                .json(user)
             })
             .catch(next);
 
    })

usersRouter
    .route(`/:user_id`)
    .all((req, res, next)=>{
        UsersService.getUserByUserId(
          req.app.get('db'),
          req.params.user_id
        )
        .then(user=>{
          if(!user){
             return res.status(404).json({
             error: {message: `User doesn't exist` }
              })
            }
            res.user = user
            next()
        })
        .catch(next)       
    })
    .get((req, res, next)=>{
        res.status(200).json(res.user)
    })
    .delete((req, res, next)=>{
        UsersService.deleteUser(
            req.app.get('db'),
            req.params.user_id
        )
        .then(()=>{
            res.status(204).end()
        })
        .catch(next)
    })


    usersRouter
    .route(`/checkuser/:username`)
    .all((req, res, next)=>{
        UsersService.getUserByUsername(
          req.app.get('db'),
          req.params.username
        )
        .then(user=>{
          if(!user){
             return res.status(404).json({
             error: {message: `User doesn't exist` }
              })
            }
            res.user = user
            next()
        })
        .catch(next)       
    })

    .post((req, res, next)=>{
      const { password } = req.body
      if(password === res.user.password)
      {
        res.status(200).json({"email": res.user.email, "id" : res.user.id});
      }
      else{
        res.status(401).json({success: false});
      }
      
    })
   


module.exports = usersRouter 