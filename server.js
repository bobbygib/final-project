// Express
var express = require("express");
var app = express();

// Serve Static Files
app.use(express.static('public'));

// 404 Middleware
app.use(function(req, res, next) {
	res.status(404);
	res.send("404 File Not Found ");
});

// 500 Middleware
app.use(function(err, req, res, next) {
	console.log(err);
	res.status(500);
	res.send("500 Internal server error");
});


// Actually Start the Server
app.listen(8080, function() {
	console.log("server started on port 8080");
});
