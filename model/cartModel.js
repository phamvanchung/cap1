const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CartSchema = new Schema({
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users"
    },
    shopId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Shops"
    },
    postInCart:[],
    firstName:{type:String,},
    lastName:{type:String,},
    email:{type:String,},
    ConfirmEmail:{type:String,},
    phone:{type:Number,},
},{
    timestamps:true,
})

module.exports= mongoose.model('Cart',CartSchema,'cart');