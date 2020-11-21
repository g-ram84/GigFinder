// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./db.js');
const db = new Pool(dbParams);
db.connect(() => {
  console.log("Connected to Elephant SQL");
});
module.exports = db;