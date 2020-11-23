import React, { useContext } from "react";
import JobListItem from "./jobListItem.js";
import PropTypes from "prop-types";
import GigfinderContext from '../context/gigfinder/gigfinderContext.js';

export default function JobList(props) {
  const gigfinderContext = useContext(GigfinderContext);
  const { jobs } = gigfinderContext;
  const temp = gigfinderContext.searchJobs();
  JobList.propTypes = {
    jobs: PropTypes.array.isRequired
  };
  

  const myJobs = jobs.map(job => {
    return (
      <JobListItem
        key={job.id}
        title={job.title}
        wage={job.hourly_wage}
        date={job.date_created}
        jobDate={job.job_date}
        active={job.active}
        positions={job.positions}
        description={job.description}
        company={job.employer_id}
        location={job.location_lat, job.location_long}
      />
    );
   
    
  });
  return (
    <section>
      <h4>job</h4>
      <ul>{myJobs}</ul>
    </section>
  );
 
}
