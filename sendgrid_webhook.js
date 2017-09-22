const localtunnel = require('localtunnel');
localtunnel(4000, {
			subdomain: 'waqasspecialwithalanandjaya'
			},
			function(err, tunnel) {
				console.log('LocalTunnel running')
			}
);