//=============================================================================
//							Authentication function
//=============================================================================
// checks if user is logged in

const mongoose				= require('mongoose'),
	  passportLocalMongoose = require('passport-local-mongoose'),
	  passport				= require('passport');

const isLoggedIn = passport.authenticate('local', {
			successRedirect: '/results',
			failureRedirect: '/login'
		});

module.exports = isLoggedIn;