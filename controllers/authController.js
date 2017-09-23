//=============================================================================
//							Login Controller
//=============================================================================
// checks if user is logged in and redirects accordingly

const mongoose				= require('mongoose'),
	  passportLocalMongoose = require('passport-local-mongoose'),
	  router 				= require('express').Router(),
	  LocalStrategy 		= require('passport-local').Strategy,
	  passport				= require('passport'),
	  User 					= require('../models/User');

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
	console.log('post /signupForm')
	console.log('req.body: ', req.user);
	User.findOneAndUpdate({_id: req.user.id}, 
                          { $set: { firstname: 	req.body.firstname,
                          			lastname: 	req.body.lastname,
                          			address1: 	req.body.address1,
                          			address2: 	req.body.address2,
                          			city	: 	req.body.city,
                          			state 	: 	req.body.state,
                          			zipcode : 	req.body.zipcode,
                          			phonenum: 	req.body.phonenum,
                          			radius	: 	req.body.radius
                          		   } 
                          }, 
                          function(error, user) {
        if (error) {
          res.send(error);
        }
        else {
            console.log('past findOneAndUpdate')
            console.log('doc: ', doc)
            res.send(200)
        };
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

module.exports = router;