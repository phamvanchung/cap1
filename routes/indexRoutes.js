const postRoute = require('./postRoute');
const userRoute = require('./userRoute');
const authRoute = require('./authRoutes');
const shopRoute = require('./shopRoute');
const meRoute = require('./meRoute');
// const storageRoute = require('./storageRoute');

module.exports = function (app){

    app.use('/api',authRoute);
    app.use('/api/me',meRoute);
    // app.use('/api/photo',storageRoute);
    app.use('/api/shops',shopRoute);
    app.use('/api/posts', postRoute);
    app.use('/api/users', userRoute);

    app.use('/',function(req, res){
        res.render('home')
    })
    
 };