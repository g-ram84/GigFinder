const getAllWorkers = function(db) {
  return db.query(`SELECT * FROM workers`)
    .then((res) => {
      //console.log(res.rows);
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};
exports.getAllWorkers = getAllWorkers;