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
  //   const history = useHistory();
 
  const userContext = useContext(UserContext);
  const applicationContext = useContext(ApplicationContext);
  const { loggedInUser } = userContext;
  const { getApplications, applications, declineApplication, acceptApplication } = applicationContext;
  console.log("application", applications);
  useEffect(() => {
    getApplications(loggedInUser.id);
  }, []);
  const [accept, setAccept] = useState('Pending');
  const onSubmitAccept = e => {
    e.preventDefault();
    userContext.acceptApplication(applications.id)
      .then(() => {
        setAccept('Accepted');
      });
  };
  const [decline, setDecline] = useState('Pending');
  const onSubmitDecline = e => {
    e.preventDefault();
    userContext.declineApplication(applications.id)
      .then(() => {
        setDecline('Declined');
      });
  };
  const myApplications = applications.map(application => {
    console.log("application in seeApplication", application);

    return (
      <div>
        { props.status !== 'Declined' &&
          <MyApplications
            email={application.email}
            status={application.status}
            date={application.date_applied}
            jobs={application.job_title}
            worker={application.worker_id}
          />
        }
        <Button onClick={onSubmitDecline}>Decline Application</Button>
        <br/>
         <Button onClick={onSubmitAccept}>Accept Application</Button>
      </div>
    );
  });
  return (
    myApplications
  );
};

//console.log(SeeApplications);


