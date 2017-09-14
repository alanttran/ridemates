//=============================================================================
//							Request Controller
//=============================================================================
// handles the request for a ride

const mongoose				= require('mongoose'),
	  passportLocalMongoose = require('passport-local-mongoose'),
	  router 				= require('express').Router(),
	  passport				= require('passport'),
	  mongoose 				= require('mongoose'),
	  Email 				= require('../models/Email'),
	  User 					= require('../models/User'),
	  isLoggedIn 			= require('../js/isLoggedIn');

// for PROD: look into the following:
// const Email = mongoose.model('Survey');

router.get('/', (req, res) => {
	console.log('in /api/request GET route')
});

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

    const newEmail = new Email(){
        title,
        body, 
        dateSent: Date.now(),
        recipients: recipients.split(',').map(email => ({ email }),
        _user: req.user.id	
    }

    console.log('newEmail: ', newEmail)

    newEmail.save(function(error, doc) {
        if (error) {
            console.log(error);
        }
	});
});

router.post('/webhooks', (req, res) => {
	console.log('webhooks received')
	console.log('req.body: ', req.body)
});

module.exports = router;