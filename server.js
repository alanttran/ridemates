//=============================================================================
//								Main Server File
//=============================================================================

// adding dependencies
const express 				= require("express"),
	  bodyParser 			= require("body-parser"),
	  dotenv 				= require('dotenv').config(),
	  passport				= require('passport'),
	  cookieParser			= require('cookie-parser'),
	  LocalStrategy 		= require('passport-local').Strategy,
	  passportLocalMongoose = require('passport-local-mongoose'),
	  session				= require('express-session'),
	  mongoose 				= require("mongoose"),
	  logger 				= require('morgan'),
	  User					= require('./models/User'),
	  path                  = require('path'),
	  keys					= require('./config/prod');

const app = express();

// Set up a default port, configure mongoose, configure our middleware
const PORT = process.env.PORT || 4000;

// Connect mongoose to our database
const db = process.env.MONGODB_URI || "mongodb://localhost/ridemate";
//  mongodb://heroku_wdqxr1c7:u11s28d9stv360c6r6o83kt5g2@ds141454.mlab.com:41454/heroku_wdqxr1c7

mongoose.connect(db, function(error) {
	if (error) {
		console.error(error);
	}
	else {
		console.log("mongoose connection is successful");
	}
});

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, './client/build')));

// Body Parser configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.use(cookieParser());

app.use(logger('dev'));

// Passport configuration
app.use(session({
	secret: "AC Torino is the best team in the world",
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next();
});

// Routes
const htmlRoutes = require("./controllers/htmlController.js");
const authRoutes = require("./controllers/authController.js");
const requestRoutes = require("./controllers/requestController.js");
const resultsRoutes = require("./controllers/resultsController.js");


app.use("/api", authRoutes);
app.use("/api/request", requestRoutes);
app.use("/api/results", resultsRoutes);



app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

// Start the server
app.listen(PORT, function() {
	console.log('=============================================================');
  	console.log("Now listening on port %s! Visit localhost:%s in your browser.", PORT, PORT);
});