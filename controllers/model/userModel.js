const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const Users = new Schema({
  
  name: String,
  address: String,
  phone:String,

});


module.exports = mongoose.model('Users', Users,'users');