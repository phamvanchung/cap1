const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const Posts = new Schema({
  name: {type: String,},
  address: {type: String,},
  description: {type: String,},
  phone:{type: String,},
  avatar: {type: String,}
},
{ timestamps:true }
);

module.exports = mongoose.model('Posts', Posts,'posts');