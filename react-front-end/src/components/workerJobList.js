import React, { Fragment, useContext, useEffect, useMemo } from "react";
import WorkerJobListItem from "./workerJobListItem.js";
import "./jobListItem.scss";

import JobContext from '../context/job/jobContext.js';
import UserContext from '../context/user/userContext.js';

export default function WorkerJobList(props) {
  const jobContext = useContext(JobContext);
  const userContext = useContext(UserContext);
  const { loggedInUser } = userContext;
  const { workerJobs, getWorkerJobs } = jobContext;

  useEffect(() => {
    getWorkerJobs(loggedInUser.id);
  }, []);
  if (workerJobs) {
    const myJobs = workerJobs.map(job => {
      const date = new Date(job.job_date);
      const year = date.getFullYear();
      let month = date.getMonth() + 1;
      let dt = date.getDate();
      if (dt < 10) {
        dt = '0' + dt;
      }
      if (month < 10) {
        month = '0' + month;
      }
      const startDate = `${year}-${month}-${dt}`;
      return (
        <WorkerJobListItem
          key={job.id}
          jobId={job.id}
          title={job.job_title}
          wage={job.hourly_wage}
          date={job.date_created}
          jobDate={startDate}
          active={job.active}
          positions={job.positions}
          description={job.job_description}
          company={job.employer_id}
        />

      );
    });
    return (
      <>
      <div className="h2">
        <h2>My Saved Jobs</h2>
      </div>
        <span>{myJobs}</span>
      </>
    );
  }
}