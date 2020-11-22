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
const getApplicationById = function(id, db) {
  return db.query(`SELECT * FROM applications WHERE id =$1`, [id])
    .then((res) => {
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};
module.exports = { getAllApplications, getApplicationById };