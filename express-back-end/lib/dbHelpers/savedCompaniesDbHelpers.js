//API Query
const getAllSavedCompanies = function(db) {
  return db.query(`SELECT * FROM saved_companies`)
    .then((res) => {
      //console.log(res.rows);
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};

const getSavedCompaniesByWorkerId = function(worker_id, db) {
  return db.query(`SELECT * FROM saved_companies WHERE worker_id =$1`, [worker_id])
    .then((res) => {
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};

module.exports = { getAllSavedCompanies, getSavedCompaniesByWorkerId };