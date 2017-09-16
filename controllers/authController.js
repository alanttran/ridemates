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

console.log('in authRoutes ')

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// router.post('/login', passport.authenticate('local', {
// 			successRedirect: 'https://bootcampspot-v2.com/',
// 			failureRedirect: '/login'
// 		}), function (req, res) {
// // router.post("/login", logIn, function (req, res) {
// 				// res.redirect('/')
// 				console.log('post /login');
// 		}
// );
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
	// res.redirect('/index')
	res.redirect('/')
});

router.post('/signup', (req, res) => {
	console.log('post /signup')
	// User.findOne({"username": req.body.username})
	// .then(function(err, doc) {
	// 	if (!doc) {
	// 		console.log('not found')
	const newUser = new User({username: req.body.username});
	User.register(newUser, req.body.password, (err, user) => {
		if (err) {
			console.log('err: ', err);
			return res.send(err);
		};
		// TODo: replace with 'logIn' ++++++++++++++++++++++++++++++++
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

	// .findOne({ "_id": req.params.id })
 //  // ..and populate all of the notes associated with it
 //  .populate("note")
 //  // now, execute our query
 //  .exec(function(error, doc) {
 //    // Log any errors
 //    if (error) {
 //      console.log(error);
 //    }
 //    // Otherwise, send the doc to the browser as a json object
 //    else {
 //      res.json(doc);
 //    }
 //  });
// });

module.exports = router;