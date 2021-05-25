const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CartSchema = new Schema({
    userId: {
        type:String,
        ref:"User"
    },
    shopId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Shop"
    },
    firstName:{type:String,},
    lastName:{type:String,},
    email:{type:String,},
    ConfirmEmail:{type:String,},
},{
    timestamps:true,
})

module.exports= mongoose.model('Cart',CartSchema,'cart');