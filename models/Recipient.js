
// ============================================================================
//                     	Recipients Schema        
// ============================================================================

const mongoose				= require('mongoose');
const Schema				= mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');

const RecipientSchema = new Schema({
			email: String,
			responded: {
					type: Boolean,
					default: false
			},
			responseType: String
})

// RecipientSchema.plugin(passportLocalMongoose);

// const Recipient = mongoose.model('Recipient', RecipientSchema);

module.exports = RecipientSchema;