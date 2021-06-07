const User = require("../model/userModel");

const hasAdmin = async (req, res, next) => {
    const userID = req.decode.id;
    const user = await User.findOne({
        _id : userID,
        permission : "admin"
    });
    if(user === null) {
        return  res.status(400).json({
            error : "",
            message : "not allowed"
        })
    }
    next();
}

const hasShop = async (req, res, next) => {
    console.log(req.decode)
    const userID = req.decode.id;
    const user = await User.findOne({
        _id : userID,
        permission : "shop"
    });
    if(user === null) {
        return  res.status(400).json({
            error : "",
            message : "not allowed"
        })
    }
    next();
}

module.exports = {
    hasAdmin,
    hasShop
}