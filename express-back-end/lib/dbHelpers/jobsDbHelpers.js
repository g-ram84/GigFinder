//API Query

const getJobById = function(id, db) {
  return db.query(`SELECT jobs.*, employers.name, employers.website FROM jobs JOIN Employers ON Jobs.employer_id = Employers.id WHERE jobs.id =$1`, [id])
    .then((res) => {
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};

const getAllJobs = function(db, options) {
  const queryParams = [];
  let queryString = `SELECT jobs.*, employers.name, employers.website FROM jobs JOIN employers ON jobs.employer_id = employers.id `;
  if (options.job_title && options.job_title !== '') {
    queryParams.push(`%${options.job_title}%`);
    queryString += ` WHERE jobs.job_title LIKE $${queryParams.length};`;
  }
  return db.query(queryString, queryParams)
    .then((res) => {
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};



const addNewJob = function(newJob, db) {
  const { job_title, hourly_wage, job_date, job_active, positions, job_description, employer_id, job_location } = newJob;
  console.log(job_title);
  return db.query(`INSERT into Jobs (job_title, hourly_wage, job_date, job_active, positions, job_description, employer_id, job_location)
  values ($1, $2, $3, $4, $5, $6, $7, $8);`,
    [job_title, hourly_wage, job_date, job_active, positions, job_description, employer_id, job_location])
    .then((res) => {
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};

const getJobsAppliedForByWorkerId = function(worker_id, db) {
  //console.log(job_title);
  return db.query(`SELECT applications.*, jobs.job_title, jobs.hourly_wage, jobs.positions, jobs.job_date, employers.name, workers.id as worker_id 
  FROM applications
  JOIN jobs ON jobs.id = applications.job_id
  JOIN workers ON workers.id = applications.worker_id
  JOIN employers ON employers.id = jobs.employer_id
  WHERE workers.id = $1;`, [worker_id])
    .then((res) => {
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};



module.exports = { getAllJobs, getJobById, addNewJob, getJobsAppliedForByWorkerId };

