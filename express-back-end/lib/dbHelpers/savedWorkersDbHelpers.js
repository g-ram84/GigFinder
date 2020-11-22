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
const getSavedWorkersByCompanyId = function(company_id, db) {
  return db.query(`SELECT * FROM saved_workers WHERE employer_id =$1`, [company_id])
    .then((res) => {
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};
module.exports = { getAllSavedWorkers, getSavedWorkersByCompanyId };