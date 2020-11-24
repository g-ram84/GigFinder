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

const addNewJob = function(newJob, db) {
  const { job_title, hourly_wage, date_created, job_date, job_active, positions, job_description, employer_id, location_lat, location_long } = newJob;
  console.log(job_title);
  return db.query(`INSERT into Jobs (job_title, hourly_wage, date_created, job_date, job_active, positions, job_description, employer_id, location_lat, location_long)
  values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`,
    [job_title, hourly_wage, date_created, job_date, job_active, positions, job_description, employer_id, location_lat, location_long])
    .then((res) => {
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};



module.exports = { getAllJobs, getJobById, searchJobs, addNewJob };

