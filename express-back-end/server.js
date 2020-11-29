// load .env data into process.env
require('dotenv').config();
// Web server config
const express = require('express');
const App = express();
exports.app = App;
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const bodyParser = require("body-parser");
const cors = require('cors');
const twilioAccount = process.env.TWILIO_ACCOUNT;
const twilioToken = process.env.TWILIO_TOKEN;;
const client = require('twilio')(
  twilioAccount,
  twilioToken
);

const { apiRoutes } = require("./routes/apiRoutes");
const { smsRoutes } = require("./routes/smsRoutes");
const db = require('./lib/db-conn');
// Express Configuration
App.use(bodyParser.urlencoded({ extended: false }));
App.use(bodyParser.json());
App.use(express.static('public'));
App.use(cors());
apiRoutes(db);
smsRoutes(client);

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
