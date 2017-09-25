//=============================================================================
//							Results Controller
//=============================================================================
// handles all routes in the results page

const _ 					= require('lodash'),
	  Path					= require('path-parser'),
	  { URL }				= require('url'),
	  mongoose				= require('mongoose'),
	  passportLocalMongoose = require('passport-local-mongoose'),
	  router 				= require('express').Router(),
	  passport				= require('passport'),
	  // isLoggedIn			= require('../js/isLoggedIn'),
	  Email 				= require('../models/Email'),
	  User 					= require('../models/User'),	  
	  Mailer				= require('../services/Mailer'),
	  geocoder 				= require("geocoder"),
	  getCoordinates 		= require('../services/GeoLocation'),
	  emailTemplate 		= require('../services/emailTemplates/rideRequestTemplate');

// TODO: get rid of this and uncomment the middleware function +++++++++++++++++++++++++++++++++++++++
// const isLoggedIn = function (req, res, next) {
// 	console.log('in isLoggedIn =========================');
// 	console.log('req.isAuthenticated: ', req.isAuthenticated);
// 	console.log('req.user: ', req.user);
// 	if(req.isAuthenticated()) {
// 		return next();
// 		console.log('user: ', req.user);
// 	}
// 	res.redirect('/login');
// }

// for PROD: look into the following:
// const Email = mongoose.model('Email');

//=================================================
// 	handling the main request
//=================================================

router.post('/', (req, res) => {
	console.log('in results');
	console.log('req.body: ', req.body);
	console.log('req.body.where: ', req.body.where);
	const searchAddress = req.body.where;
	const rideType = req.body.bikeType;
	const difficulty = req.body.difficulty;
	console.log('searchAddress: ', searchAddress);
	geocoder.geocode(searchAddress, function(err, data) {
		console.log('data.results.geometry: ', data.results[0].geometry.location);
		searchCoordinates = data.results[0].geometry.location;
		User.find({ 
					bikeType: rideType,
					difficulty: difficulty
				 })
            .then(function(doc) {
            	console.log('*****************************');
            	console.log('doc: ', doc);
            	let resultArray = doc.filter( user => {
            		if (user.coordinates && user.radius) {
            			console.log('eligible user at: ', user.coordinates, 'radius: ', user.radius)
            			return getCoordinates.inRange(	user.coordinates, 
            											searchCoordinates, 
            											user.radius);
            		}
            	});
            	console.log('resultArray: ', resultArray)
                res.json(resultArray);
            }).catch(function(err) {
                res.json(err);
            });
	});
});

module.exports = router;