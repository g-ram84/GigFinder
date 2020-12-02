import React, { Fragment, useState, useContext } from "react";
import "./jobListItem.scss";
import { Row, Col, Button, Container } from 'reactstrap';
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
              <Link className="profile-link" to={profileLink}>{workerFirst} {workerLast}</Link>
            </Row>
            <Row>
              <Button id="Button" onClick={(e) => onSubmitDecline(e, app)}>Decline</Button>
              <Button id="Button" onClick={(e) => onSubmitAccept(e, app)}>Accept</Button>
            </Row>
          </Container>
        </Fragment>
        }
        {app.status === 'Accepted' && <Fragment>
          <Container>
            <Row>
              <Link className="profile-link" to={profileLink}>{workerFirst} {workerLast}</Link>
            </Row>
          </Container>
        </Fragment>
        }
      </Row>
    </Fragment>

  );
}