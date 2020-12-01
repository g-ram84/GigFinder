import React, { useContext, useEffect } from "react";
import EmployerJobListItem from "./employerJobListItem.js";
import "./jobListItem.scss";
import JobContext from '../context/job/jobContext.js';
import UserContext from '../context/user/userContext.js';
import ApplicationContext from '../context/application/applicationContext.js';

export default function EmployerJobList() {
  const jobContext = useContext(JobContext);
  const userContext = useContext(UserContext);
  const applicationContext = useContext(ApplicationContext);
  const { getAllApplications } = applicationContext;
  const { employerJobs, getEmployerJobs } = jobContext;
  const { loggedInUser } = userContext;
  useEffect(() => {
    getEmployerJobs(loggedInUser.id);
    getAllApplications();
  }, []);

  const myJobs = employerJobs.map(job => {
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
      <EmployerJobListItem
        key={job.id}
        jobId={job.id}
        title={job.job_title}
        wage={job.hourly_wage}
        date={job.date_created}
        jobDate={startDate}
        active={job.active}
        positions={job.positions}
        description={job.job_description}
        employer_id={job.employer_id}
      />
    );
  });
  return (
    <>
      <h1>realEmployerJoblistItems</h1>
      <span>{myJobs}</span>
    </>
  );
}
