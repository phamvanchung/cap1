const Users = require('./model/userModel')

class PostController{
    
    show(req,res,next) { 
        Users.find({})
        .then(users =>{
            res.json(users)
        })
        .catch(next)
    }


}

module.exports= new PostController;