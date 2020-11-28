import React, { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';
import UserContext from '../context/user/userContext.js';
import ApplicationContext from '../context/application/applicationContext';


import "./jobListItem.scss";
import { render } from 'react-dom';


export default function Apply(props) {
  const history = useHistory();
  const userContext = useContext(UserContext);
  const applicationContext = useContext(ApplicationContext);
  const { loggedInUser } = userContext;
  const date = new Date(Date.now());
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let dt = date.getDate();
  if (dt < 10) {
    dt = '0' + dt;
  }
  if (month < 10) {
    month = '0' + month;
  }
  const applyDate = `${year}-${month}-${dt}`;

  const newApp = {
    worker_id: loggedInUser.id,
    job_id: props.jobID,
    status: 'Pending',
    date_applied: applyDate
  };
  console.log("props", props);
  const onSubmit = e => {
    e.preventDefault();
    applicationContext.addNewApplication(newApp);
  };
  console.log("aplication", newApp);
  return (
    <div>
      <Form onSubmit={onSubmit} afterSubmit={() => history.push('/')}>
        <Button>Apply Now!</Button>
      </Form>
    </div>
  );
}
