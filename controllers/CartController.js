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

// module.exports.addToCart = async (req, res) =>{
//     let cart = new Cart(req.body.booking);
//     let userId = req.body.userId;
//     let postId = req.body.postId;
//     let checkCartExist = await Cart.findOne({ userId });
//     if (checkCartExist) {
//         await Cart.findOneAndUpdate({ userId }), {
//             $push: { postInCart: cart.postInCart }
//         }
//         await Post.findOneAndUpdate({ postId })
        
//         res.json(cart).status(200);
//     }else{
//         cart.save()
//         .then((cart) => {
//             res.status(200).json(cart)
//         })
//         .catch((err) => {
//             res.status(400).send(err)
//         })
//     }
// }

module.exports.addToCart = async (req, res) =>{
    let { userId, postId } = req.body;
    let { firstName,lastName,email,confirmEmail,address,phone} = req.body.booking;
    let cart = new Cart({
        userId: userId,
        postId: postId,
        firstName: firstName,
        lastName: lastName,
        email: email,
        confirmEmail:confirmEmail,
        address:address,
        phone: phone,
    });
    return cart.save()
    .then(cart=>{
        res.json(cart);
    })
    .catch(err=>{
        res.status(400).send(err)
    })
}