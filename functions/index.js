const functions = require('firebase-functions');

const actions = require('./actions');

exports.movies = functions.https.onRequest((request, response) => {
	function say(fulfillmentText) {
		response.json({
			fulfillmentText
		});
	}

	const {
		body: {
			queryResult: {
				action,
				contexts,
				parameters
			},
			originalDetectIntentRequest: {
				source
			}
		}
	} = request;

	const reqDetails = {
		action,
		contexts,
		source,
		parameters
	};

	console.info(reqDetails);

	if (!actions[action]) {
		return say('I cant handle this action sad face');
	}

	actions[action](reqDetails, say);
});
