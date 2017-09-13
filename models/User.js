
// ============================================================================
//                     			Users Schema        
// ============================================================================

const mongoose				= require('mongoose');
const Schema				= mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
			username: String,
			password: String,
			// user: 	{ 
			// 	type: 		String, 
			// 	unique: 	true, 
			// 	required: 	true, 
			// 	dropDups: 	true 
			// },
			date: 	{
				type: 		Date,
				required: 	false
			}
			// comments: [{
			// 		type: Schema.ObjectId,
			// 		ref : 'Comment'
			// }]
})

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', UserSchema);

module.exports = User;