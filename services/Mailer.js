
// ============================================================================
//                     			Mailer Service        
// ============================================================================

const sendgrid = require('sendgrid');
// const helper = sendgrid.mail;
// https://github.com/sendgrid/sendgrid-nodejs
const mailHelper = sendgrid.mail;
const keys = require('../config/keys');

// mailHelper.setApiKey(process.env.SENDGRID_API_KEY);

// const msg = {
//   to: 'test@example.com',
//   from: 'test@example.com',
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// mailHelper.send(msg);

class Mailer extends mailHelper.Mail {
	constructor({ title, recipients }, content) {
		super();

		this.from_email = new mailHelper.Email('no-reply@ridemates.com');
		this.title = title;
		this.body = new mailHelper.Content('text/html', content);
		this.recipients = this.formatAddresses(recipients);
	}
}

module.exports = Mailer;