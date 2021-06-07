const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CartSchema = new Schema({
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users"
    },
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Posts"
    },
    // postInCart:[],
    firstName:{type:String,},
    lastName:{type:String,},
    email:{type:String,},
    confirmEmail:{type:String,},
    phone:{type:Number,},
    address:{type:String,},
},{
    timestamps:true,
})

module.exports= mongoose.model('Cart',CartSchema,'cart');