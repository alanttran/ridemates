//=============================================================================
//							Request Controller
//=============================================================================
// handles the request for a ride

const mongoose				= require('mongoose'),
	  passportLocalMongoose = require('passport-local-mongoose'),
	  router 				= require('express').Router(),
	  passport				= require('passport'),
	  Email 				= require('../models/Email'),
	  User 					= require('../models/User'),
	  isLoggedIn 			= require('../js/isLoggedIn'),	  
	  Mailer				= require('../services/Mailer'),
	  emailTemplate 		= require('../services/emailTemplates/rideRequestTemplate');

console.log('in requestcontroller')

// for PROD: look into the following:
// const Email = mongoose.model('Survey');

//=================================================
// 	displaying all the requests for a user
//=================================================

router.get('/', (req, res) => {
	console.log('in /api/request GET route')
});

//=================================================
// 	handling the request form, submitting emails
//  and saving the request to DB
//=================================================

router.post('/', (req, res) => {
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
        title,
        body, 
        dateSent: Date.now(),
        recipients: recipients.split(',').map(email => ({ email: email.trim() })),
        _user: req.user.id	
    });

    console.log('email: ', email)

    const mailer = new Mailer(email, emailTemplate(email));

    email.save(function(error, doc) {
        if (error) {
            console.log(error);
        }
	});
});

//=================================================
// 	retrieving the webhooks from sendgrid
//  and associating to our recipients
//=================================================

router.post('/webhooks', (req, res) => {
	console.log('webhooks received')
	console.log('req.body: ', req.body)
});

module.exports = router;