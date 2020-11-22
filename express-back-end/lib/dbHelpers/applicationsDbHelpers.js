//API Query
const getAllApplications = function(db) {
  return db.query(`SELECT * FROM applications`)
    .then((res) => {
      //console.log(res.rows);
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};
exports.getAllApplications = getAllApplications;