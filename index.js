const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const db = require('./config/db');
var cors = require('cors');
var route = require('./routes/indexRoutes');
var exphbs  = require('express-handlebars');
// var bodyParser = require('body-parser')



//user cors
app.use(cors())


//Template handlebar
app.engine('.hbs', exphbs({extname: '.hbs',}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources','views'));
// console.log(path.join(__dirname, 'resources/views'));

app.use(express.urlencoded({ extended:true }));
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))

//connect db
db.connect();






//init route
route(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})