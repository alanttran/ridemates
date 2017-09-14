
// ============================================================================
//                     	Recipients Schema        
// ============================================================================

const mongoose				= require('mongoose');
const Schema				= mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');

const RecipientSchema = new Schema({
			// username: String,
			// password: String,
			// user: 	{ 
			// 	type: 		String, 
			// 	unique: 	true, 
			// 	required: 	true, 
			// 	dropDups: 	true 
			// },
			email: String,
			responded: {
					type: Boolean,
					default: false
			}
})

// RecipientSchema.plugin(passportLocalMongoose);

// const Recipient = mongoose.model('Recipient', RecipientSchema);

module.exports = RecipientSchema;