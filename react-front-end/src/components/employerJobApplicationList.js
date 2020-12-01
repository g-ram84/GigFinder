import React, { Fragment, useContext, useEffect, useState } from "react";
import EmployerJobApplicationListItem from './employerJobApplicationListItem';
import ApplicationContext from '../context/application/applicationContext.js';
export default function EmployerJobApplicationList(props) {
  const applicationContext = useContext(ApplicationContext);
  const { allApplications, getAllApplications, acceptApplication, declineApplication } = applicationContext;
  useEffect(() => {
    getAllApplications();
  }, []);

  if (allApplications) {
    const currentJobApplications = allApplications.filter((item) =>
      item.job_id === props.job_id
    );
    if (currentJobApplications.length > 0) {
      const myApplications = currentJobApplications.map(app => {
        return (
          <EmployerJobApplicationListItem
            key={app.id}
            application={app}
          />
        );
      });
      return (
        <>
          <h1>Pending Applications for this Job</h1>
          {myApplications}
        </>
      );
    }
  }
  return (
    <>
      <h1>There are no Applicants for this Job.</h1>
    </>
  );
}




