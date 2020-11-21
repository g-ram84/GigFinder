const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;

require('dotenv').config('/.env'); // 


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
app.use("/jobs", jobRoutes());


App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});




// const dbHelper = require ('./db/database_functions/database') 

// // PG database client/connection setup
// const { Pool } = require('pg');
// const dbParams = require('./lib/db.js');


// module.exports = dbParams;
//~~~~~~~

// const db = new Pool(dbParams);
// db.connect();

