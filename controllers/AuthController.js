const Users =  require('./model/userModel');
const jwt = require('jsonwebtoken');


// module.exports.login = async (req, res, next) =>{
//    const {email, password }= req.body;
//    Users.findOne({
//        email: email,
//        password: password
//     })
//     .then(data =>{
//         if(data){
//             var token = jwt.sign({_id:data._id},'mk')
//             return res.json({
//                 message:'success',
//                 token: token
//             })
//         }else{
//             return res.json('fail!')
//         }
//     })
//     .catch(err=>{
//         res.status(500).send(err)
//     })
// // };


module.exports.login = async (req, res, next) =>{
    const email = req.body.email;
    const password = req.body.password;
    const user = await Users.findOne({ email: email})
    if(!user) {
        return res.json({
            err : "email and password is incorrect!",
            code : 401
        })
    }
    if(user.password !== password ){
        return res.json({
            err : "Password is incorrect!",
            code : 401
        })
    }
    let accessToken = jwt.sign({name : user.email}, 'accessToken', {expiresIn : '1h'});
    let refreshToken = jwt.sign({name : user.email},'refreshToken',{expiresIn: '7d'});
    res.json({
        code : 200,
        message:"dang nhap thanh cong",
        expiresIn : 60*60,
        expiresInRefToken : 60*60*24*7,
        user : user,
        refreshToken,
        accessToken
    })
}

module.exports.register = (req, res) => {
    const {email,password,username,phone} = req.body;
    Users.findOne({email: email})
    .then(data => {
        if(data){
            res.send({message:'Account already exists ?'})
        }
        else{
            return Users.create({
                email:email,
                password:password,
                userName:username,
                phoneUser:phone,
            })
        }
    })
    .then(data => 
        res.status(201).send({message:'User was registered successfully!'}))
    .catch(err =>
        res.status(500).send(err))
};

module.exports.logout = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token
        })
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
};

module.exports.private =  (req, res, next) => {
    try {
        const token = req.params.token;
        const result = jwt.verify(token,'mk');
        if(result){
            next()
        }
    } catch (error) {
        res.status(500).send(error)
    }
    (req, res)=> {
        res.json('wellcom')
    }
}