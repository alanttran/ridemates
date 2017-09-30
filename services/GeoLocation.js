
// =============================================================
// 		GEOCODING: capturing the lat and long of user 			
// =============================================================

const request 	= require('request');
const haversine = require('haversine');
const keys		= require('../config/prod');
//const keys = require('../config/keys');


// Google long. lat. coordinates GEOCODING API
const geoApiKey = keys.geoApiKey;

const geocodeString 		= 	"https://maps.googleapis.com/maps/api/geocode/json?address=";
const geocodeKey			= 	"&key=";
let   userinput 			= 	"";
let   coordinatequeryURL	= 	"";

const getCoordinates = {

	fromAddress: async function(address) {
		console.log('in fromAddress')
		userinput 			= 	address;
		coordinatequeryURL 	= 	geocodeString +
								userinput + 
								geocodeKey + 
								geoApiKey;

		//	call to Google Geocoding service
		request(coordinatequeryURL, function(err, response, body) {
			if (err) throw err;

    	// console.log(response.statusCode) // 200
    	// console.log(response.headers['content-type']) // 'image/png'
			res = JSON.parse(body);
			const coords = {
				lat : (res.results[0].geometry.location.lat),
				lng : (res.results[0].geometry.location.lng)
			}
			console.log('geocode coords: ', coords)

			return coords;
		});
	},

	inRange: function(p1, p2, range) {
		console.log('in inRange')

		// returns the distance in miles
		return haversine(	{latitude: p1.lat, longitude: p1.lng},
							{latitude: p2.lat, longitude: p2.lng},
							{threshold: range, unit: 'mile'})
	}	
}

module.exports = getCoordinates;