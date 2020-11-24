import React, { useContext } from "react";
import JobListItem from "./jobListItem.js";
import SearchBar from "./searchBar.js";
import PropTypes from "prop-types";
import GigfinderContext from '../context/gigfinder/gigfinderContext.js';

export default function JobList(props) {
  const gigfinderContext = useContext(GigfinderContext);
  const { jobs } = gigfinderContext;
  
  const filteredJobList = jobs.filter((job) => job.job_title.toLowerCase().includes(props.query.toLowerCase()))

  const myJobs = filteredJobList.map(job => {
    return (
      <div>
      <JobListItem
        key={job.id}
        title={job.job_title}
        wage={job.hourly_wage}
        date={job.date_created}
        jobDate={job.job_date}
        active={job.active}
        positions={job.positions}
        description={job.description}
        company={job.employer_id}
        location={job.location_lat, job.location_long}
      />
      </div>
    );
   
    
  });
  return (
    <section>
      <ul>{myJobs}</ul>
    </section>
  );
 
}
