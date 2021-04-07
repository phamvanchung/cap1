const postRoute = require('./postRoute');
const userRoute = require('./userRoute');


module.exports = function (app){

    app.use('/posts', postRoute);
    app.use('/users', userRoute);
    app.use('/',function(req, res){
        res.render('home')
    })
    
 };