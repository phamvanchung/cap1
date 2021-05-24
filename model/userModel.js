const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;


const Users = new Schema({
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
    phoneUser:{
        type:String,
        required: true
    },
    userName:{
        type: String,
        required:true,
    },
    roles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Role"
        }
      ],
    avatar:{type: String,}
},
{ timestamps:true }
);

// Users.methods.generateAuthToken = async function() {
//     // Generate an auth token for the user
//     const user = this
//     const token = jwt.sign({_id: user._id}, process.env.JWT_KEY)
//     user.tokens = user.tokens.concat({token})
//     await user.save()
//     return token
// }

module.exports = mongoose.model('Users', Users,'users');