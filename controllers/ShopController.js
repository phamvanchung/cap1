const Shops = require('../model/shopModel');

module.exports.getAllShop = (req, res, next) =>{
    let shops = Shops.find()
    .then((shops) =>{
        res.json(shops);
    })
    .catch((err) =>{
        res.status(400).send(err)
    })
}

module.exports.getIdShop = (req, res) =>{
    let shopId = req.params.shopId;
    Shops.findOne({ _id: shopId})
    .then((shops)=>{
        res.json(shops);
    })
    .catch((err)=>{
        res.status(400).send(err)
    })
}

module.exports.addShop = (req,res) =>{

}

module.exports.updateShop = (req,res) =>{

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