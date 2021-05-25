const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const Posts = new Schema({
    name: {type: String,trim: true,},
    address: {type: String,trim: true,},
    description: {type: String,},
    phone:{type: String,trim: true,},
    avatar: {
        type: String,
        data: Buffer, 
        contentType: String , 
        path : String
        }
},
{ timestamps:true }
);

module.exports = mongoose.model('Posts', Posts,'posts');