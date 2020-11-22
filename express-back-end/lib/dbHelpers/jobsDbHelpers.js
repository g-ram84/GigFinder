//API Query
const getAllJobs = function(db) {
  return db.query(`SELECT * FROM jobs`)
    .then((res) => {
      //console.log(res.rows);
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};
exports.getAllJobs = getAllJobs;