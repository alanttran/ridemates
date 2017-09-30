//=============================================================================
//							Login Controller
//=============================================================================
// checks if user is logged in and redirects accordingly

const mongoose				= require('mongoose'),
	  passportLocalMongoose = require('passport-local-mongoose'),
	  router 				= require('express').Router(),
	  LocalStrategy 		= require('passport-local').Strategy,
	  passport				= require('passport'),
	  User 					= require('../models/User'),
	  geocoder 				= require("geocoder");


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

router.post('/signup', (req, res) => {
	console.log('post /signup')
	console.log('req.body: ', req.body)
	const newUser = new User({username: req.body.username});
	User.register(newUser, req.body.password, (err, user) => {
		if (err) {
			console.log('err: ', err);
			return res.send(err);
		};
		passport.authenticate('local')(req, res, () => {
			console.log('signed up, past auth');
			req.session.save((err) => {
				if (err) {
					return next(err);
				}
				res.redirect('/');
			})
		});
	});
});

router.post('/signupForm', (req, res) => {
	const userAddress = (	req.body.address + " " +
							req.body.city + " " +
							req.body.state + " " +
							req.body.zipcode
							);
	console.log('userAddress: ', userAddress);
	
	// getCoordinates.fromAddress(userAddress, function(err, data) {
	geocoder.geocode(userAddress, function(err, data) {

		console.log('post /signupForm')
		console.log('req.body: ', req.user);
		console.log(JSON.stringify(data, null, 2))
		console.log('data.results.geometry: ', data.results[0].geometry.location);
		User.findOneAndUpdate({_id: 			req.user.id}, 
              { $set: { firstname: 				req.body.firstname,
              			lastname: 				req.body.lastname,
              			address: 				req.body.address,
              			city	: 				req.body.city,
              			state 	: 				req.body.state,
              			zipcode : 				req.body.zipcode,
              			email	: 				req.body.email,
              			phonenum: 				req.body.phonenum,
              			radius	: 				req.body.radius,
              			rideTypeRoad: 			req.body.rideTypeRoad,
					    rideTypeMountain: 		req.body.rideTypeMountain,
					    rideTypeOther: 			req.body.rideTypeOther,
					    difficultyEasy: 		req.body.difficultyEasy,
					    difficultyIntermediate: req.body.difficultyIntermediate,
					    difficultyHard: 		req.body.difficultyHard,
              			coordinates: 			data.results[0].geometry.location 	
              		   } 
              }, 	
            function(error, user) {
	        if (error) {
	          res.send(error);
	        }
	        else {
	            console.log('past findOneAndUpdate')
	            res.send(200)
	        };
	    }); 

	});

	// const newUser = new User({username: req.body.username});
	// User.register(newUser, req.body.password, (err, user) => {
	// 	if (err) {
	// 		console.log('err: ', err);
	// 		return res.send(err);
	// 	};
	// 	passport.authenticate('local')(req, res, () => {
	// 		console.log('signed up, past auth');
	// 		req.session.save((err) => {
	// 			if (err) {
	// 				return next(err);
	// 			}
	// 			res.redirect('/');
	// 		})
	// 	});
	// });
});

router.post(
    "/login",
    passport.authenticate("local", { failureRedirect: "/signup" }),
    (req, res, next) => {
        console.log("successfully logged in.");
        req.session.save(err => {
            if (err) {
                return next(err);
            }
            res.redirect("/");
        });
    }
);

router.get('/logout', (req, res) => {
	console.log('post /logout')
	req.logout();
	console.log('you are logged out');
	res.redirect('/')
});

router.get('/isAuthenticated', (req, res) => {
	console.log('get /isAuthenticated');
	res.json(true);
});

router.get('/getUser', (req, res) => {
	console.log('get /getUser works');
	console.log(req.user);
	res.json(req.user);
});

module.exports = router;