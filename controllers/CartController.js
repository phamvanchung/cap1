const Cart = require('../model/cartModel');

module.exports.getCart = (req, res)=>{
    let cart= Cart.find()
    .then(res=>{
        res.status(200).json(cart)
    })
    .catch((err) => {
        res.status(400).send(err);
    })
}

module.exports.addToCart = async (req, res) =>{
    let cart = new Cart(req.body);
    let userID = req.body.userID;
    let checkCartExist = await Cart.findOne({ userID });
    if (checkCartExist) {
        await Cart.findOneAndUpdate({ userID }), {
            $push: {
                postInCart: cart.postInCart
            }
        }
    }else{
        cart.save()
        .then((cart) => {
            res.status(200).json(cart)
        })
        .catch((err) => {
            res.status(400).send(err)
        })
    }
}