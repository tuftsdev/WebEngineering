var express = require('express');
var app = express();
// See https://stackoverflow.com/questions/5710358/how-to-get-post-query-in-express-node-js
var bodyParser = require('body-parser')
app.use(bodyParser.json());
// See https://stackoverflow.com/questions/25471856/express-throws-error-as-body-parser-deprecated-undefined-extended
app.use(bodyParser.urlencoded({ extended: true })); // Required if we need to use HTTP post parameters

/* HOW TO READ ROUTES USING EXPRESS FRAMEWORK:
app.HTTP_VERB('ROUTE NAME', function(request, response) {
  // Do stuff here...
});
*/

app.get('/', function(request, response) {
	response.send("Hello world");
});

app.get('/pikachu', function(request, response) {
	response.send("You've won the game!");
});

app.post('/rides', function(request, response) {
	var username = request.body.username;
	var lat = request.body.lat;
	var lng = request.body.lng;
	lat = ++lat;
	lng = ++lng;
	response.send("Thanks! Your name " + username + " was last seen at (" + lat + ", " + lng + ")");
});

// Oh joy! http://stackoverflow.com/questions/15693192/heroku-node-js-error-web-process-failed-to-bind-to-port-within-60-seconds-of
app.listen(process.env.PORT || 3000);