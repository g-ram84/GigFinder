const getAllWorkers = function(db) {
  return db.query(`SELECT * FROM workers`)
    .then((res) => {
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};
const getWorkerById = function(id, db) {
  return db.query(`SELECT * FROM workers WHERE id =$1`, [id])
    .then((res) => {
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};
module.exports = { getAllWorkers, getWorkerById };