const mongoose				= require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const router 	= require('express').Router(),
	  passport				= require('passport'),
	  User 		= require('../models/User');

router.post('/', (req, res) => {
	User.findOne({"username": req.body.username})
	.then(function(err, doc) {
		if (!doc) {
			console.log('not found')
			const newUser = new User({username: req.body.username});
			User.register(newUser, req.body.password, function(err, user) {
				if (err) {
					console.log('err: ', err);
				};
				passport.authenticate('local')(req, res, () => {
					res.send('Hi from the secret garden of manly pleasures')
				});
			});
		}
		else {
			res.send('user exists')
			console.log('found: ', doc)
		}
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
});

module.exports = router;