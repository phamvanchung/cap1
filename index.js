const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const db = require('./config/db');
const route = require('./routes/indexRoutes');
const exphbs  = require('express-handlebars');
// var bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors');
const session = require('express-session')


//user cors
app.use(cors())

//log all request in the Apache combined format to STDOUT
app.use(morgan('combined'))

//Template handlebar
app.engine('.hbs', exphbs({extname: '.hbs',}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources','views'));
// console.log(path.join(__dirname, 'resources/views'));

app.use(express.urlencoded({ extended:true }));
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))


//use express session
app.use(session({
    resave: true, 
    saveUninitialized: true, 
    secret: 'somesecret', 
    cookie: { maxAge: 60000 }
}))

//connect db
db.connect();

//init route
route(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})