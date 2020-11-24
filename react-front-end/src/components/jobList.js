import React, { useContext } from "react";
import JobListItem from "./jobListItem.js";
import "./jobListItem.scss"
import GigfinderContext from '../context/gigfinder/gigfinderContext.js';

export default function JobList(props) {
  const gigfinderContext = useContext(GigfinderContext);
  const { jobs } = gigfinderContext;
  const filteredJobList = jobs.filter((job) => job.job_title.toLowerCase().includes(props.query.toLowerCase()))

  const myJobs = filteredJobList.map(job => {
    const date = new Date(job.job_date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    let dt = date.getDate();

    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month
    }

    const startDate = `${year}-${month}-${dt}`


    return (
      <div>
      <JobListItem
        key={job.id}
        title={job.job_title}
        wage={job.hourly_wage}
        date={job.date_created}
        jobDate={startDate}
        active={job.active}
        positions={job.positions}
        description={job.job_description}
        company={job.employer_id}
        location={job.location_lat, job.location_long}
      />
      </div>
    );
   
    
  });
  return (
    <section>
      <span className="myJob">{myJobs}</span>
    </section>
  );
 
}
