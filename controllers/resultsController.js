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
	  emailTemplate 		= require('../services/emailTemplates/rideRequestTemplate');

// TODO: get rid of this and uncomment the middleware function +++++++++++++++++++++++++++++++++++++++
const isLoggedIn = function (req, res, next) {
	console.log('in isLoggedIn =========================');
	console.log('req.isAuthenticated: ', req.isAuthenticated);
	console.log('req.user: ', req.user);
	if(req.isAuthenticated()) {
		return next();
		console.log('user: ', req.user);
	}
	res.redirect('/login');
}

// for PROD: look into the following:
// const Email = mongoose.model('Survey');

//=================================================
// 	displaying all the requests for a user
//=================================================

router.get('/allrequests', isLoggedIn, async (req, res) => {
	console.log('in allrequests');
	const requests = await Email.find({ _user: user.id })
		.select({
			recipients: false
		})
	console.log('in /api/request GET route')
	res.send(requests);
});

//=================================================
// 	displaying the thank you page
//=================================================

router.get('/:requestId/:choice', isLoggedIn, (req, res) => {
	console.log('in /api/request GET (thanks) route');
	res.send('Thanks for responding');
});

//=================================================
// 	handling the request form, submitting emails
//  and saving the request to DB
//=================================================

router.post('/', isLoggedIn, async (req, res) => {
	//  TODO: ++++++++++++++++++++++++++++++++++++++++++++++++++++
// router.post('/', isLoggedIn, (req, res) => {
	// if (!req.user) {
	// 	return res.status(401).send({ 
	// 		error:: 'You must log in before you can send a request' 
	// 	})
	// }
	console.log('email button received')
	console.log('req.body: ', req.body)

    const email = new Email({
        title: req.body.title,
        body: req.body.body, 
        dateSent: Date.now(),
        recipients: req.body.recipients.split(',').map(email => ({ email: email.trim() })),
        // TODO: add user for auth ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // _user: req.user.id	
    });

    console.log('\n')
    console.log('--------------------------')
    console.log('email: ', email)
    console.log('--------------------------')
    console.log('\n')

    const mailer = new Mailer(email, emailTemplate(email));

// try {
    await mailer.sendMail(function (error, response) {
			if (error) {
				console.log('Error response received');
				res.send(error)
			}
			console.log(response.statusCode);
			console.log(response.body);
			console.log(response.headers);
			res.json(response)
	})
	// 	saving the email to the DB
    await email.save(function(error, doc) {
        if (error) {
            console.log(error);
        }
	});
// } catch (err) {
//   res.status(422).send(err);
// }

});

//=================================================
// 	retrieving the webhooks from sendgrid
//  and associating to our recipients
//=================================================

router.post('/webhooks', (req, res) => {
	console.log('---------------------------------------')
	console.log('webhook received')
	console.log('----------------------------------------')
	console.log('req.body: ', req.body)
	// taking the response array from sendgrid,
	// extracting the part of the url that defines the 
	// request ID and the response
	// and constructing a new array
	const responsePath = new Path('/api/request/:requestId/:choice');
	const events = _.chain(req.body)
		.map(({ email, url }) => {			
			const match = responsePath.test(new URL(url).pathname);
			if (match) {
				return { email,
						 requestId: match.requestId,
						 choice: match.choice
					   }
			}
		})
		// making sure to clean up any null elements
		// from the array
		.compact()
		// removing any duplicate records
		.uniqBy('email', 'requestId')
		// saving the remaining to DB
		.each(({ requestId, email, choice }) => {
			Email.updateOne({
				_id: requestId,
				recipients: {
					$elemMatch: { email: email }
				}
			}, {
				  $set: { 'recipients.$.responded': true,
						  'recipients.$.responseType': choice
				  }
			}).exec();
		})
		// returning the array
		.value();

	console.log(events)
	res.send(200);

	// saving the responses in the database
	

});

module.exports = router;