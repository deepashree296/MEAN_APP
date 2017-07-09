var passport = require('passport');
var mongoose = require('mongoose');

module.exports = function() {

	var User = mongoose.model('User');

	passport.serializeUser(function(user,done){
		done(null,user.id);

	});

	passport.deserializeuser(function(id, done){

		User.findOne({

			_id: id
		}, '-passowrd -salt', function(err, user) {
			done(err, user);
		});

	});

	require('./strategies/local.js')();

};
