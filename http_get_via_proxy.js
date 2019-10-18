var Http = require('http');
var fs = require('fs');

fs.writeFile('something.html','', function (err) {
	if (err) throw err;
        console.log('something.html created');
});
var req = Http.request(
	{
		host: 'ur-proxy-ip',
		port: ur-proxy-port,
		method: 'GET',
		path: 'http://www.google.com/'
	},
	function (res) {
		res.on('data', function (data) {
			fs.appendFile('something.html',data.toString(), function (err) {
				if (err) throw err;
				console.log('appended !');
			});
		});
	}
);

req.end();
