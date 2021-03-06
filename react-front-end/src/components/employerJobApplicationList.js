import React, { Fragment, useContext, useEffect, useState } from "react";
import EmployerJobApplicationListItem from './employerJobApplicationListItem';
import ApplicationContext from '../context/application/applicationContext.js';
import './jobListItem.scss'
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
          <h3 className="h3">Applications</h3>
          {myApplications}
        </>
      );
    }
  }
  return (
    <>
      <h3 className="h3">Nobody has applied yet.</h3>
    </>
  );
}




