import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';
import UserContext from '../context/user/userContext.js';


import ApplicationContext from '../context/application/applicationContext.js';
import MyApplications from './myApplications.js';

import axios from 'axios';

import "./jobListItem.scss";
import { render } from 'react-dom';


export default function SeeApplications(props) {
  console.log("PROPSPROPS", props, "PROPSPROPS");
  //   const history = useHistory();

  const userContext = useContext(UserContext);
  const applicationContext = useContext(ApplicationContext);
  const { loggedInUser, loggedInUserType } = userContext;
  const { getApplications, applications, declineApplication, acceptApplication } = applicationContext;
  console.log("aaplications after defining", applications);
  console.log("aaplicationCONTEXT after defining", applicationContext);

  useEffect(() => {
    console.log("loggedinusertyoe>>>>", loggedInUserType);
    if (loggedInUserType === 0) {
      console.log("");
      getApplications(props.jobID);

    }
    if (loggedInUserType === 1) {
      getApplications(loggedInUser.id);
    }
    if (loggedInUserType === 2) {

      getApplications(props.jobID);
    }
  }, []);

  const [accept, setAccept] = useState('Pending');
  const [decline, setDecline] = useState('Pending');


  const onSubmitAccept = (e, app) => {
    e.preventDefault();
    console.log("applications>>>>", applications);
    applicationContext.acceptApplication(app.id)
      .then(() => {
        setAccept('Accepted');
        getApplications(props.jobID);
        console.log("submission of applciations accepted");
      }).catch(err => {
        console.log("CATCH");
        console.log(err);
      });
  };

  const onSubmitDecline = e => {
    e.preventDefault();
    applicationContext.declineApplication(applications.id)
      .then(() => {
        setDecline('Declined');
      }).catch(err => {
        console.log(err);
      });
  };

  if (applications) {


    const myApplications = applications.map(application => {
      return (
        <div>
          {
            <MyApplications
              email={application.email}
              status={application.status}
              date={application.date_applied}
              jobs={application.job_title}
              worker={application.worker_id}
            />
          }
          {application.status === 'Pending' &&
            <Button onClick={onSubmitDecline}>Decline Application</Button>
          }
          <br />
          {application.status === 'Pending' &&
            <Button onClick={(e) => onSubmitAccept(e, application)}>Accept Application</Button>
          }
        </div>
      );
    });
    return (
      myApplications
    );
  }
};

//console.log(SeeApplications);


