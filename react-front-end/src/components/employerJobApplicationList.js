import React, { Fragment, useContext, useEffect, useState } from "react";
import EmployerJobApplicationListItem from './employerJobApplicationListItem';

import ApplicationContext from '../context/application/applicationContext.js';
export default function EmployerJobApplicationList(props) {
  const [x, setX] = useState(0);
  const applicationContext = useContext(ApplicationContext);
  const { allApplications, getAllApplications, acceptApplication, declineApplication } = applicationContext;
  useEffect(() => {
    getAllApplications();
  }, [x]);

  if (allApplications) {
    const currentJobApplications = allApplications.filter((item) =>
      item.job_id === props.job_id
    );

    const onSubmitAccept = (e, app) => {
      e.preventDefault();
      console.log(app);
      acceptApplication(app.id);
      setX(app.id);


    };

    const onSubmitDecline = (e, app) => {
      e.preventDefault();
      console.log(app);
      console.log("declined");
      declineApplication(app.id);
      setX(app.id);

    };


    if (currentJobApplications.length > 0) {
      const myApplications = currentJobApplications.map(job => {
        return (
          <Fragment>
            {/* <h1>Job Application List Item</h1> */}
            {job.status === 'Pending' &&
              <button onClick={(e) => onSubmitDecline(e, job)}>Decline Application</button>
            }
            <br />
            {job.status === 'Pending' &&
              <button onClick={(e) => onSubmitAccept(e, job)}>Accept Application</button>
            }
          </Fragment>



          //<EmployerJobApplicationListItem

          // key={job.id}
          // jobId={job.id}
          // title={job.job_title}
          // wage={job.hourly_wage}
          // date={job.date_created}
          // jobDate={startDate}
          // active={job.active}
          // positions={job.positions}
          // description={job.job_description}
          // company={job.employer_id}
          ///>
        );
      });
      return (
        <>
          <h1>Job Application List Items</h1>
          {myApplications}
        </>
      );
    }
  }
  return (
    <>
      <h1>No applications for this job yet</h1>
    </>
  );
}




