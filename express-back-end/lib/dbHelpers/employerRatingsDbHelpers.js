//API Query
const getAllEmployerRatings = function(db) {
  return db.query(`SELECT * FROM employer_ratings`)
    .then((res) => {
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};

const getEmployerRatingsByWorkerId = function(worker_id, db) {
  return db.query(`SELECT * FROM employer_ratings WHERE worker_id =$1`, [worker_id])
    .then((res) => {
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};

module.exports = { getAllEmployerRatings, getEmployerRatingsByWorkerId };