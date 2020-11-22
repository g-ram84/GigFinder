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
exports.getAllSavedCompanies = getAllSavedCompanies;