
// ============================================================================
//                     			Mailer Service        
// ============================================================================

const sendgrid = require('sendgrid');
// const sgMail = require('@sendgrid/mail');
// const helper = sendgrid.mail;
// https://github.com/sendgrid/sendgrid-nodejs
const mailHelper = sendgrid.mail;
//const keys = require('../config/keys');
const keys = require('../config/prod');

// sgMail.setApiKey(keys.sendgrid_KEY);

class Mailer extends mailHelper.Mail {
	constructor({ title, recipients }, content) {
		super();

		this.sgApi = sendgrid(keys.sendgrid_KEY);
		this.from_email = new mailHelper.Email('no-reply@ridemates.com');
		this.title = title;
		this.body = new mailHelper.Content('text/html', content);
		this.subject = title;
		this.recipients = this.formatAddresses(recipients);
	
		this.addContent(this.body);
		this.addClickTracking();
		this.addRecipients();
	}

	formatAddresses(recipients) {
		return recipients.map(({ email }) => {
			return new mailHelper.Email(email);
		})
	}

	addClickTracking() {
		const trackingSettings = new mailHelper.TrackingSettings();
		const clickTracking = new mailHelper.ClickTracking(true, true);
		
		trackingSettings.setClickTracking(clickTracking);
		this.addTrackingSettings(trackingSettings);
	}

	addRecipients() {
		const personalize = new mailHelper.Personalization();
		
		this.recipients.forEach(recipient => {
			personalize.addTo(recipient);
		});
		this.addPersonalization(personalize);
	}

	async sendMail(cb) {
		console.log('in sendMail')
		console.log("sgApi: ", this.sgApi)
		const request = this.sgApi.emptyRequest({
			method: "POST",
			path: "/v3/mail/send",
			body: this.toJSON()
		});

		const response = this.sgApi.API(request, cb);
	}
}

module.exports = Mailer;