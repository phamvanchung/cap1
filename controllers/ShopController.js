const Shops = require('../model/shopModel');

module.exports.getAllShop = (req, res) =>{
    let shops = Shops.find()
    .then((shops) =>{
        res.json(shops);
    })
    .catch((err) =>{
        res.status(400).send(err)
    })
}

module.exports.getIdShop = (req, res) =>{
    // let {shopId}  = req.params;
    // Shops.findOne({_id:shopId})
    // .then((shops) =>{
    //     res.json(shops);
    // })
    // .catch((err) =>{
    //     res.status(400).send(err)
    // })
}

module.exports.addShop = (req,res) =>{
    let {nameShop,email,password,phoneShop} = req.body;
    // let avatar = req.file.originalname;
    let shops = new Shops({
        nameShop:nameShop,
        email:email,
        password:password,
        phoneShop:phoneShop,
        // avatar:avatar
    })
    return shops.save()
    .then((shop)=>{
        res.status(201).json(shop)
    })
    .catch((err)=>{
        res.status(400).send(err)
    })
}

module.exports.updateShop = (req,res) =>{
    const shopId = req.params.shopId;
    return Shops.findByIdAndUpdate({_id:shopId},req.body)
    .then(shops =>{
        res.status(200).json({message:"update success"},shops)
    })
    .catch((err)=>{
        res.status(400).send(err)
    })
}

module.exports.deleteShop = (req,res) =>{
    let shopId = req.params.shopId;
    Shops.findByIdAndDelete({_id: shopId})
    .then((shops) =>{
        res.json(shops);
    })
    .catch((err) =>{
        res.status(400).send(err)
    })
}