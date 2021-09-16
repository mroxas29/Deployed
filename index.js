const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
var express = require('express');
var session = require('express-session');
const MongoStore =  require('connect-mongo')(session);
const moment = require('moment');
var app = new express();



//const mongoURI = "mongodb+srv://SuperHot2101:admin@printpaddb.h1lxu.mongodb.net/PrintPadDB?retryWrites=true&w=majority";
const { dbURL } = require('./config');
mongoose
    .connect(dbURL, { 
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

//const dbc = require(`./Database/models/connection.js`);
const db = require(`./Database/models/db.js`);
const templates = require('./Database/models/templates');
const cart = require('./Database/models/cart');
const review = require('./Database/models/review');



const routes = require(`./routes/routes.js`);





var path = require('path');



var bodyParser = require('body-parser');




const { envPort, sessionKey } = require('config');


const port = envPort || 3000;

//...

app.use(session({
  secret: sessionKey,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 * 7 }
}));



app.use(`/`, routes);






app.get('/', function(req,res){
    res.render(__dirname + '\\' + 'index');
});
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const hbs = require('hbs');
const { Session } = require('inspector');
app.set('view engine', 'hbs');

app.use(express.static(`public`));



app.get('/templates', async(req,res) =>{
    const temps = await templates.find({});
    res.render('templates', {temps});
})

app.get('/cart', async(req,res) =>{
    const cartItem = await cart.find({});
    res.render('cart', {cartItem});
})

app.get('/review', async(req,res) =>{
    const reviews = await review.find({});
    res.render('review', {reviews});
})




app.get('/BC1', async(req,res) =>{
    res.render('BC1');
})

app.get('/BC2', async(req,res) =>{
    res.render('BC2');
})

app.get('/P1', async(req,res) =>{
    res.render('P1');
})

app.get('/P2', async(req,res) =>{
    res.render('P2');
})

app.get('/T1', async(req,res) =>{
    res.render('T1');
})

app.get('/T2', async(req,res) =>{
    res.render('T2');
})

app.get('/Pa1', async(req,res) =>{
    res.render('Pa1');
})

app.get('/Pa2', async(req,res) =>{
    res.render('Pa2');
})




app.get('/cart', async(req,res) =>{
    res.render('cart');
})

app.get('/review', async(req,res) =>{
    res.render('review');
})

app.get('/sample', async(req,res) =>{
    res.render('sample');
})

app.get('/regards', async(req,res) =>{
    res.render('regards');
})

app.get('/checkout', async(req,res) =>{
    res.render('checkout');
})

app.get('/sample', async(req,res) =>{
    res.render('sample');
})


var server = app.listen(3000, function(){
    console.log("Listening to port 3000, node server is running");
});

