// load .env data into process.env
require('dotenv').config();
// Web server config
const express = require('express');
const App = express();
exports.app = App;
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const bodyParser = require("body-parser");
const cors = require('cors')

const { apiRoutes } = require("./routes/apiRoutes");
const db = require('./lib/db-conn');

// Express Configuration
App.use(bodyParser.urlencoded({ extended: false }));
App.use(bodyParser.json());
App.use(express.static('public'));
App.use(cors());

// Sample GET route
// App.get('/api/data', (req, res) => res.json({
//   message: "Seems to work!",
// }));

apiRoutes(db);
// indexRoute.getIndex(db);

//Importing the routes
//const jobRoutes = require("./routes/jobs");
//using routes
// App.use("api/jobs", jobRoutes(db));

// App.get('api/jobs', (req, res) => {
//   console.log("jobs jobs");
//   res.send('hello hello');

// });

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
