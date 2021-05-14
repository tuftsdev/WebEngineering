# Overview
A Node.js + Express + Postgres web application.  There are two routes in this web application:

1. `POST /feedme` - takes in data from a client.  Data is stored into a Postgres table named `fooditems` in a database named `nodepsqlapp`.  If data is stored successfully, sends an HTTP response of OK (status code 200) with HTML message, otherwise a 500. 
2. `GET /` - the home page.  This displays all the data stored in the Postgres table named `fooditems` in a database named `nodepsqlapp`.

# About the Files
* `server.js` - the source of the server
* `package.json` -  This file holds various metadata relevant to the project. This file is used to give information to `npm` that allows it to identify the project as well as handle the project's dependencies (VERY important).  See https://docs.npmjs.com/files/package.json for more details on what goes in to a `package.json` file.
* `Procfile` - Required by Heroku.  A `Procfile` "is a mechanism for declaring what commands are run by your application's dynos on the Heroku platform."  In other words, it must specify which is the entry source file (i.e., the `server.js` file).  See https://devcenter.heroku.com/articles/procfile for more details.

# Creating the Local Development Postgres Database with Sample Data
1. Make sure the Postgres database server is turned on (e.g., on Linux, `sudo service postgresql start`).  If you installed Postgres via Homebrew on macOS, run `pg_ctl -D /usr/local/var/postgres start` to start the Postgres database server.  YOU MUST KEEP RUNNING the database server!
2. `psql -U postgres` (not necessary to do on Heroku Postgres)
3. `CREATE USER nodepsqlapp_user WITH password 'abc123';` (this assumes local development; not necessary to do on Heroku Postgres as a user will be created once you provision Heroku Postgres add-on)
4. `CREATE DATABASE nodepsqlapp WITH OWNER=nodepsqlapp_user;` (this is not necessary if you are using Heroku Postgres; not necessary to do on Heroku Postgres as a database will be created once you provision Heroku Postgres add-on)
5. `\q` to quit out of Postgres command line interface
6. `psql nodepsqlapp -U nodepsqlapp_user` (or `heroku pg:psql` on Heroku with Postgres add-on)
7. `CREATE TABLE fooditems (id SERIAL PRIMARY KEY, food TEXT NOT NULL, created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP);` (absolutely necessary)
8. `INSERT INTO fooditems (food) VALUES ('Pasta');` (insert sample data 1)
9. `INSERT INTO fooditems (food) VALUES ('milk');` (insert sample data 2)
10. `INSERT INTO fooditems (food) VALUES ('eggs');` (insert sample data 3)
11. `SELECT * FROM fooditems;` (to verify test data were entered into database table correctly)
12. `\q` to quit out of Postgres command line interface

# Running This Example Locally
1. Make sure the Postgres database server is turned on (e.g., on Linux, `sudo service postgresql start`).  If you installed Postgres via Homebrew on macOS, run `pg_ctl -D /usr/local/var/postgres start` to start the Postgres database server.  YOU MUST KEEP RUNNING the database server!
2. Make sure database with table in Postgres are created (see above)
3. Run `npm install` to install all dependencies of the web application as listed in `package.json` file.
4. Run `node server.js` (or `nodejs server.js` on some Linux distributions) and LET IT KEEP RUNNING!

Please note: each time you add a dependency to the `package.json` file, you must re-run `npm install`.

# Sending Data to Server
Use `curl` to execute an HTTP POST request.  That is, send some data to the server.  Example: `curl --data "food=pizza" http://localhost:3000/feedme`

# Checking If Data Was Stored in Postgres table
Go to `http://localhost:3000` on a web browser.  You should see your data entry "pizza" listed.

# Trying This App Live!
* https://protected-peak-86481.herokuapp.com/
* Example data entry: `curl --data "food=Pineapples" https://protected-peak-86481.herokuapp.com//feedme` and see your food entry on https://protected-peak-86481.herokuapp.com/

# Exercises
1. Explain why if you run `curl --data "fooditem=steaks" http://localhost:3000/feedme`, the data will not be stored correctly in Postgres table.
2. In reality, people generally do not send data to a server via command line tool such a `curl`, but using an HTML form.  Example: ordering something on Amazon.  Create an HTML form where one can type in a food item in a text box and upon clicking on a "Submit" button, the data is sent to server.