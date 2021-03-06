const Users = require('../model/userModel')
var bcrypt = require("bcryptjs");


module.exports.getAllUser = (req,res) => {
    let users = Users.find()
    .then((users) => {
        res.json(users);
    })
    .catch((err)=> {
        res.status(400).send(err)
    })
};
    
//getUserId
module.exports.getIdUser = (req,res) => {
    let userId  = req.params.userId;
    Users.findOne({_id:userId})
    .then((users) =>{
        res.json(users);
    })
    .catch((err) =>{
        res.status(400).send(err)
    })
}
module.exports.addUser = (req, res,next) =>{
    let {email, password, userName, phoneUser} = req.body;
    let avatar = req.file.originalname;
    let users =new Users({
        email: email,
        password: bcrypt.hashSync(password,7),
        userName: userName,
        phoneUser: phoneUser,
        avatar: avatar,
    })
    return users.save()
    .then((users) =>{
        res.json(users)
    })
    .catch((err)=>{
        next(err);
    })
}

module.exports.updateUser = (req, res) =>{
    const userId = req.params.userId;
    return Users.findByIdAndUpdate({_id:userId},req.body)
    .then((users)=>{
        res.json({message:"update success",users})
    })
    .catch((err)=>{
        res.status(400).send(err)
    })
}
module.exports.deleteUser = (req, res) =>{
    let userId = req.params.userId;
    Users.findByIdAndDelete({_id:userId})
    .then((users) => {
        res.json(users);
    })
    .catch((err) =>{
        res.status(400).send(err)
    })
}