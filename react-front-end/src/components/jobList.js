import React, { useContext } from "react";
import JobListItem from "./jobListItem.js";
import "./jobListItem.scss";
import JobContext from '../context/job/jobContext.js';

export default function JobList() {
  const jobContext = useContext(JobContext);
  const { jobs } = jobContext;
  const myJobs = jobs.map(job => {
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
      <JobListItem
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
      {/* <h1>Job Search JoblistItems</h1> */}
      <span>{myJobs}</span>
    </>
  );
}
