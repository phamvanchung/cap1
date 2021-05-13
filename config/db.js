const mongoose = require('mongoose');

async function connect (){
    try{
        await mongoose.connect('mongodb://localhost:27017/admin', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
        });console.log('Connect database successfully!');
        
    }catch(error){  
        console.log('Could not connect to the database');
    }
}

module.exports = {connect};