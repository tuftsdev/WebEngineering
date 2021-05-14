var express = require('express');
var bodyParser = require('body-parser'); // Required if we need to use HTTP post parameters
var validator = require('validator'); // See documentation at https://github.com/chriso/validator.js
var app = express();
const path = require('path')
// See https://stackoverflow.com/questions/5710358/how-to-get-post-query-in-express-node-js
app.use(bodyParser.json());
// See https://stackoverflow.com/questions/25471856/express-throws-error-as-body-parser-deprecated-undefined-extended
app.use(bodyParser.urlencoded({ extended: true })); // Required if we need to use HTTP post parameters

// Postgres initialization and connect to database
// process.env.DATABASE_URL is the default environment variable on Heroku for the Postgres add-on
// If environment variables not found, fall back to local database
// nodepsqlexample is the name of the local database
const { Client } = require('pg');
const client = new Client({
	connectionString: process.env.DATABASE_URL || "postgres://nodepsqlapp_user:abc123@localhost:5432/nodepsqlapp",
	ssl: {
		rejectUnauthorized: false
	}
});
client.connect();

// Serve static content in folder named "public"
app.use(express.static(path.join(__dirname, 'public')));

app.post('/feedme', function(request, response) {
	var foodItem = request.body.food;
	foodItem = validator.escape(foodItem); // what happens if you comment this line out?
	client.query('INSERT INTO fooditems (food) VALUES ($1)', [foodItem], (error, result) => {
		if (!error) {
			response.send('<html lang="en"><head><title>Thanks!</title></head><body><h2>Thanks for your submission!</h2></body></html>');
		}
		else {
			response.send(500);
		}
	});
});

app.get('/', function(request, response) {
	response.set('Content-Type', 'text/html');
	var indexPage = '';

	client.query('SELECT * FROM fooditems', (error, result) => {
		if (!error) {
			indexPage += '<!DOCTYPE HTML><html lang="en"><head><title>What Did You Feed Me?</title></head><body><h1>What Did You Feed Me?</h1>';
			// `result` is a cursor (think a pointer) to the first record of query results
			for (var count = 0; count < result.rows.length; count++) {
				indexPage += "<p>You fed me " + result.rows[count].food + "!</p>";
			}
			indexPage += "</body></html>"
			response.send(indexPage);
		}
		else {
			response.send('<!DOCTYPE HTML><html lang="en"><head><title>What Did You Feed Me?</title></head><body><h1>Whoops, something went terribly wrong!</h1></body></html>');
		}
	});
});

// Oh joy! http://stackoverflow.com/questions/15693192/heroku-node-js-error-web-process-failed-to-bind-to-port-within-60-seconds-of
app.listen(process.env.PORT || 3000);
