//API Query
const getAllEmployers = function(db) {
  return db.query(`SELECT * FROM employers`)
    .then((res) => {
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};
const getEmployerById = function(id, db) {
  return db.query(`SELECT * FROM employers WHERE id =$1`, [id])
    .then((res) => {
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};
module.exports = { getAllEmployers, getEmployerById };