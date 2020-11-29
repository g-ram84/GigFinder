/*API Query
Gets workers rated by employers

SELECT worker_ratings.*, workers.* FROM worker_ratings
JOIN workers ON worker_ratings.worker_id=workers.id
WHERE worker_ratings.employer_id =1
ORDER BY worker_ratings.rating;
*/
const getAllWorkerRatings = function(db) {
  return db.query(`SELECT * FROM worker_ratings`)
    .then((res) => {
      //console.log(res.rows);
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};
const getWorkerRatingsByEmployerId = function(company_id, db) {
  return db.query(`SELECT * FROM worker_ratings WHERE employer_id =$1`, [company_id])
    .then((res) => {
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};
module.exports = { getAllWorkerRatings, getWorkerRatingsByEmployerId };