const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
const pg = require('pg');
const db = require('./lib/db-conn')
require('dotenv').config('/.env');


// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

//Importing the routes
const jobRoutes = require("./routes/jobs");
//using routes
App.use("api/jobs", jobRoutes(db));

App.get('api/jobs', (req, res) => {
  console.log("jobs jobs")
  res.send('hello hello')

})

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
