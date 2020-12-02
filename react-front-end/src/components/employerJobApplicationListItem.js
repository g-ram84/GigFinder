import React, { Fragment, useState, useContext } from "react";
import "./jobListItem.scss";
<<<<<<< HEAD
import '../views/job.scss'
import { Row, Col, Button } from 'reactstrap';
=======
import { Row, Col, Button, Container } from 'reactstrap';
>>>>>>> 0d41d4189be9f2f94e9b21d858f5d5c7a3672b84
import { NavLink, Link } from 'react-router-dom';
import ApplicationContext from '../context/application/applicationContext.js';
import WorkerContext from '../context/worker/workerContext.js';
// import Results from '../views/results.js';
const classNames = require('classnames');
export default function EmployerJobApplicationListItem(props) {
  const applicationContext = useContext(ApplicationContext);
  const workerContext = useContext(WorkerContext);
  const { workers } = workerContext;
  const { acceptApplication, declineApplication } = applicationContext;
  let profileLink = "";
  let workerFirst = "";
  let workerLast = "";
  const app = props.application;

  const onSubmitAccept = (e, app) => {
    e.preventDefault();
    acceptApplication(app.id);
  };

  const onSubmitDecline = (e, app) => {
    e.preventDefault();
    declineApplication(app.id);
  };

  const worker = workers.find(({ id }) => id === app.worker_id);
  if (worker) {
    profileLink = `workers/${worker.id}`;
    workerFirst = worker.first_name;
    workerLast = worker.last_name;
  }
  return (
    <Fragment>
      <Row>
        {app.status === 'Pending' && <Fragment>
          <Container>
            <Row>
              <p>{workerFirst} {workerLast}</p>
            </Row>
            <Row>
              <Button onClick={(e) => onSubmitDecline(e, app)}>Decline</Button>
              <Button onClick={(e) => onSubmitAccept(e, app)}>Accept</Button>
              <Button onClick={(e) => onSubmitAccept(e, app)}>Worker Profile</Button>
              <Link to={profileLink} className="Button">Profile</Link>
            </Row>
          </Container>
        </Fragment>
        }
      </Row>
    </Fragment>

  );
}