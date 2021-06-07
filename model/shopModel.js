const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const Shops = new Schema ({
    nameShop: {type: String,},
    email:{
        type:String,
        required:true,
        lowercase: true,
        unique: true,
    },
    password:{
        type:String,
        minLength: 7,
        required:true
    },
    phoneShop:{
        type:String,
    },
    avatar:{
        type: String,
    },
},
{ timestamps:true }
);

module.exports =mongoose.model('Shops',Shops,'shops');