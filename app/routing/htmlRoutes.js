// Dependencies
var path = require('path');

// Export HTML routes
module.exports = function(app) {
	
	// Home html
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '/../public/home.html'));
	});

	// Survey html
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '/../public/survey.html'));
	});
};