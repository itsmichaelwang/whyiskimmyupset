// server.js

// set up ========================
var express = require('express'),
	http = require('http'),
	formidable = require('formidable'),		// used to handle file uploads
	fs = require('fs'),
	path = require('path'),
	util = require('util'),
	gm = require('gm');

var app = express();

// config
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
	res.render('index.html', {
		user: req.user
	});
});

app.post('/upload', function(req, res) {
	var form = new formidable.IncomingForm();
	form.uploadDir = __dirname + '/public/uploads';
	form.keepExtensions = true;
	form.multiples = false;

	form.parse(req, function(err, fields, file) {
		res.writeHead(200, {'content-type': 'text/plain'});






		res.write('received upload:\n\n');
		res.end(util.inspect({fields: fields, files: file}));
	});

});

app.listen(8080);
