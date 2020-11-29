import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';
import UserContext from '../context/user/userContext.js';
import ApplicationContext from '../context/application/applicationContext.js';
import MyApplications from './myApplications.js';
// import gigfinderState, { getApplications } from '../context/gigfinder/gigfinderState.js';

import axios from 'axios';

import "./jobListItem.scss";
import { render } from 'react-dom';


export default function SeeApplications(props) {
  //   const history = useHistory();
  const userContext = useContext(UserContext);
  const applicationContext = useContext(ApplicationContext);
  const { loggedInUser } = userContext;
  const { getApplications, applications } = applicationContext;
  console.log("application", applications);
  useEffect(() => {
    getApplications(loggedInUser.id);
  }, []);

  const myApplications = applications.map(application => {
    return (
      <div>
        <MyApplications
          // email={workers.email}
          status={application.status}
          date={application.date_applied}
        />
      </div>
    );
  });
  return (
    myApplications
  );
};

//console.log(SeeApplications);


