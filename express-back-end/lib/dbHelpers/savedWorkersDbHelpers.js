//API Query
const getAllSavedWorkers = function(db) {
  return db.query(`SELECT * FROM saved_workers`)
    .then((res) => {
      //console.log(res.rows);
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};
exports.getAllSavedWorkers = getAllSavedWorkers;