
// ============================================================================
//                     			Emails Schema        
// ============================================================================

const mongoose				= require('mongoose');
const Schema				= mongoose.Schema;
const RecipientSchema		= require('./Recipient');
// const passportLocalMongoose = require('passport-local-mongoose');

const EmailSchema = new Schema({
			// username: String,
			// password: String,
			// user: 	{ 
			// 	type: 		String, 
			// 	unique: 	true, 
			// 	required: 	true, 
			// 	dropDups: 	true 
			// },
			title: 			String,
			body:  			String,
			dateSent: 		Date,
			lastResponded: 	Date,
			recipients: [RecipientSchema],
			yes: {
				type: Number,
				default: 0
			},
			no: {
				type: Number,
				default: 0
			},
			_user: {
				type: Schema.Types.ObjectId, 
				ref: 'User'
			}
})

// EmailSchema.plugin(passportLocalMongoose);

const Email = mongoose.model('Email', EmailSchema);

module.exports = Email;