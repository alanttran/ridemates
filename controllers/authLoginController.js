//=============================================================================
//							Login Controller
//=============================================================================
// checks if user is logged in and redirects accordingly

const mongoose				= require('mongoose'),
	  passportLocalMongoose = require('passport-local-mongoose'),
	  router 				= require('express').Router(),
	  passport				= require('passport'),
	  User 					= require('../models/User'),
	  isLoggedIn 			= require('../js/isLoggedIn');

router.post('/', isLoggedIn, (req, res) => {
				res.send('user exists')
				console.log('login found: ', doc)
			});

module.exports = router;