import React, { useContext, useEffect, useState } from 'react';
import JobList from '../components/jobList'
import axios from 'axios';
import GigfinderContext from '../context/gigfinder/gigfinderContext.js';
// import { apiRoutes } from '../../../express-back-end/routes/apiRoutes';



function Job(props) {
  const [job, setJob] = useState();
  useEffect(() => {
    axios.get(
      `api/jobs/${props.match.params.id}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
    })
      .then((res) => {
        setJob(res.data[0])
      })
  }, [props.match.params.id])

    if (job === undefined) {
      return (
        <h1>Loading!</h1>
      )
    }
    return (
      <div className="jobs_item">
        <header className="job_header">
          <strong>{job.job_title}</strong>
        </header>
        <br />
        ${job.hourly_wage}/hr
        <br />
        {job.positions} positions available!
        <body className="job_des">
          {job.job_description}
        </body>

        <footer className="start_date">
          
        </footer>
        <br />
      </div>
    );
  }


export default Job;