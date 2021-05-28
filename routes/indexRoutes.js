const postRoute = require('./postRoute');
const userRoute = require('./userRoute');
const authRoute = require('./authRoutes');
const shopRoute = require('./shopRoute');
const meRoute = require('./meRoute');
const storageRoute = require('./storagesRoute');
const cartRoute = require('./cartRoute');

module.exports = function (app){

    app.use('/api',authRoute);
    app.use('/api/me',meRoute);
    app.use('/api/cart',cartRoute);
    app.use('/api/storages',storageRoute);
    app.use('/api/shops',shopRoute);
    app.use('/api/posts', postRoute);
    app.use('/api/users', userRoute);

    app.use('/',function(req, res){
        res.render('home')
    })
    
 };