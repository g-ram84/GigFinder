//API Query
// const getAllApplications = function(db) {
//   return db.query(`SELECT * FROM applications`)
//     .then((res) => {
//       return res.rows;
//     }).catch(err => {
//       console.log(err);
//     });
// };

const getAllApplications = function(db, options) {
  const queryParams = [];
  let queryString = `SELECT * FROM applications `;

  if (options.worker_id && options.worker_id !== '') {
    console.log(options.worker_id);
    queryParams.push(`${options.worker_id}`);
    queryString += `WHERE worker_id = $${queryParams.length} `;
  }

  if (options.job_id && options.job_id !== '') {
    queryParams.push(`${options.job_id}`);
    queryString += queryParams.length > 1 ? `AND` : `WHERE`;
    queryString += ` job_id = $${queryParams.length} `;
  }
  return db.query(queryString, queryParams)
    .then((res) => {
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};

const addNewApplication = function(newApplication, db) {
  const { worker_id, job_id, status, date_applied } = newApplication;

  return db.query(`INSERT into applications (worker_id, job_id, status, date_applied)
  values ($1, $2, $3, $4);`,
    [worker_id, job_id, status, date_applied])
    .then((res) => {
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};
const acceptApplication = function(id, db) {
  return db.query(`UPDATE applications SET status = 'Accepted' WHERE id = $1`, [id])
    .then((res) => {
      console.log("res.ROWS>>>",res.rows)
      return res.rows;
    }).catch(err => {
      console.log("CATCH")
      console.log(err);
    });
};

const declineApplication = function(id, db) {
  return db.query(`UPDATE applications SET status = 'Declined' WHERE id = $1`, [id])
    .then((res) => {
      console.log("is it in DECLINE")
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};

const getApplicationById = function(id, db) {


  
  return db.query(`SELECT applications.*, jobs.job_title, employers.name  FROM applications JOIN jobs ON jobs.id = applications.job_id JOIN employers ON employers.id = jobs.employer_id  WHERE applications.id =$1`, [id])
    .then((res) => {
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};


const getApplicationsByJobId = function(job_id, db) {

  return db.query(`SELECT applications.*, jobs.job_title, jobs.employer_id as job_employer_id, jobs.hourly_wage, workers.email, employers.id as employer_id
  FROM applications 
  JOIN jobs ON jobs.id = applications.job_id
  JOIN workers ON workers.id = applications.worker_id
  JOIN employers ON employers.id = jobs.employer_id
  WHERE applications.job_id =$1`, [job_id])
    .then((res) => {
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};











module.exports = { getAllApplications, getApplicationById, addNewApplication, getApplicationsByJobId, acceptApplication, declineApplication };
