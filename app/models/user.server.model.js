var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	firstName: String,
	lastName: String,
	email: {
		type: String,
		match: [/.+\@.+\..+/, "Please fill a valid e-mail address"]
	},
	username: {
		type: String,
		unique: true,
		required: 'username is required',
		trim: true
	},
	password: {
		type: String,
		validate: [
		function(password) {
			return password && password.length > 6;
		}
		]
	}

});

mongoose.model('User', UserSchema);

