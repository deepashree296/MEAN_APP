var mongoose = require('mongoose');
var config = ('./config');

module.exports = function() {
	var db = mongoose.connect(config.db);
	return db;
};