// Dependencies
var path = require('path');

// Import the list of friend entries
var friends = require('../data/friends');

// Export API routes
module.exports = function(app) {
	
	// Total list of friend entries
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	// Add new friend 
	app.post('/api/friends', function(req, res) {
		//  User input 
		var userData = req.body;
		
		var userResponses = userData.scores;
		
		// Compute best friend match
		var matchName = '';
		var matchImg = '';
		var totalDifference = 10000; // Make the initial value big for comparison

		// Compute differences in friends list
		for (var i = 0; i < friends.length; i++) {
			
			// Compute differences of each question
			var diff = 0;
			for (var x = 0; x < userResponses.length; x++) {
				diff += Math.abs(friends[i].scores[x] - userResponses[x]);
			}
			// Find lowest difference for match
			if (diff < totalDifference) {
				
				totalDifference = diff;
				matchName = friends[i].name;
				matchImg = friends[i].photo;
			}
		}

		// Add new user
		friends.push(userData);

		// Send response
		res.json({status: 'OK', matchName: matchName, matchImg: matchImg});
	});
};