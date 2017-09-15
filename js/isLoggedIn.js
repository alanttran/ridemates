//=============================================================================
//							Authentication function
//=============================================================================
// checks if user is logged in

const mongoose				= require("mongoose"),
	  passportLocalMongoose = require("passport-local-mongoose"),
	  User 					= require('../models/User'),
	  LocalStrategy 		= require('passport-local').Strategy,
	  passport				= require("passport");

const logIn = passport.authenticate("local") 

// {
		// 	successRedirect: "/request",
		// 	failureRedirect: "https://bootcampspot-v2.com/"
		// });
		// );

module.exports = logIn;