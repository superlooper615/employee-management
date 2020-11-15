import express from 'express';
import cors from  'cors';
import bodyParser from  'body-parser';
import config from  'config';
import path from  'path';
import session from  'express-session';
import hbs from  'express-handlebars';

// Use babel npm package to transpile your ES6 to a commonjs target
import babelCore from 'babel-core/register';
import babelPolyfill from 'babel-polyfill';

var app = express();

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// view engine setup
app.set('views', './views');
app.engine('hbs', hbs({ 
  extname: '.hbs',
  defaultLayout: null
}));
app.set('view engine', '.hbs');
app.set('views',path.join(__dirname,'views'));

// Database connection imports
// const db = require('./config/db.config.js');
// // force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Databse successfuly initialized!');
// }).catch((err) => {
//   console.log(err, "Something went wrong with the Database Update!");
// });

import passport from  'passport';
//load passport strategies
import passportConfig from  './authentication/passport.js';
// Passport
app.use(session({ 
  secret: 'keyboard cat',// session secret
  resave: true, 
  saveUninitialized:true
}));

// passportConfig.initializePassport(passport);
passportConfig.initializePassport(passport); 
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions




// To Allow cross origin requests originating from selected origins
var corsOptions = {
  origin: config.get('allowed_origins'),
  methods: ['GET, POST, OPTIONS, PUT, DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}
app.use(cors(corsOptions));

// Router imports
import indexRouter from './routes/index.route.js';
import customerRouter from './routes/customer.route.js';
import userauthRouter from './routes/userauth.route.js';

app.use('/', indexRouter);
app.use('/customer', customerRouter);
app.use('/user', userauthRouter);




// Create a Server
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("App listening at http://%s:%s", host, port)
})