import React, { useContext, useEffect, useState } from 'react';
import { ExternalLink } from 'react-external-link';
import JobList from '../components/jobList';
import './job.scss';
import axios from 'axios';
import Apply from '../components/apply';
import SeeApplications from '../components/seeApplications';

import UserContext from '../context/user/userContext.js';
// import employers from '../../../express-back-end/routes/employers';
// import { apiRoutes } from '../../../express-back-end/routes/apiRoutes';



function Job(props) {
  const userContext = useContext(UserContext);
  const { loggedInUser, loggedInUserType } = userContext;

  const [job, setJob] = useState();
  useEffect(() => {
    axios.get(
      `/api/jobs/${props.match.params.id}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
    })
      .then((res) => {
        setJob(res.data[0]);
      });
  }, [props.match.params.id]);

  if (job === undefined) {
    return (
      <h1>Loading!</h1>
    );
  }
  console.log("THIS IS THE WHOLE JOB", job);
  console.log("loggedinUSER", loggedInUser);
  return (
    <div className="jobs_item">
      <header className="job_header">
        <span>{job.name}</span>
        <br /> Is looking for
          <br />
        <strong>{job.job_title}s</strong>

      </header>
      <br />
        ${job.hourly_wage}/hr
      <br />
      {job.positions} positions available!
      <body className="job_des">
        {job.job_description}
      </body>
        Visit the company's website at
      <br />
      <ExternalLink rel={'external'} target={'_blank'} className="start_date" href={`http://www.${job.website}`} />
      <br />
      {loggedInUser && loggedInUserType === 0 && <p>Please log-in to apply!</p>}
      {loggedInUser && loggedInUserType === 1 && <Apply jobID={job.id} />}
      {loggedInUser && loggedInUserType === 2 && <SeeApplications/>}
    </div >
  );
}
//employers.id === applications.employer_id && 

export default Job;