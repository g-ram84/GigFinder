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
const getJobById = function(id, db) {
  return db.query(`SELECT * FROM jobs WHERE id =$1`, [id])
    .then((res) => {
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};

const searchJobs = function(job_title, db) {
  return db.query(`SELECT * FROM jobs WHERE tob_title =$1`, [job_title])
    .then((res) => {
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};


module.exports = { getAllJobs, getJobById, searchJobs };