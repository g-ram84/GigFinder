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
// job_title: 'musician',
//     hourly_wage: 17,
//     date_created: '2020-12-01T07:00:00.000Z',
//     job_date: '2020-12-18T07:00:00.000Z',
//     job_active: true,
//     positions: 1,
//     job_description: 'neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit',
//     employer_id: 2,
//     location_lat: 49.6252,
//     location_long: -122.482