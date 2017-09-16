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

    mailer.sendMail(function (error, response) {
			if (error) {
			console.log('Error response received');
			res.send(error)
			}
			console.log(response.statusCode);
			console.log(response.body);
			console.log(response.headers);
			res.json(response)
		})
 // TODO: remember to save the email into the DB ++++++++++++++++++++++++++++++++++++
 //    Email.save(function(error, doc) {
 //        if (error) {
 //            console.log(error);
 //        }
	// });
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