//API Query

const getJobById = function(id, db) {
  return db.query(`SELECT jobs.*, employers.company_name FROM jobs JOIN Employers ON Jobs.employer_id = Employers.id WHERE jobs.id =$1`, [id])
    .then((res) => {
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};

const getAllJobs = function(db, options) {
  const queryParams = [];
  let queryString = `SELECT jobs.*, employers.company_name FROM jobs JOIN employers ON jobs.employer_id = employers.id `;
  if (options.job_title && options.job_title !== '') {
    queryParams.push(`%${options.job_title}%`);
    queryString += ` WHERE jobs.job_title LIKE $${queryParams.length};`;
  }
  console.log(queryString);
  console.log(queryParams);
  return db.query(queryString, queryParams)
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



module.exports = { getAllJobs, getJobById, addNewJob };

