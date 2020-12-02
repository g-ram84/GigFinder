import React, { Fragment, useState, useContext } from "react";
import "./jobListItem.scss";
import '../views/job.scss'
import { Row, Col, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import ApplicationContext from '../context/application/applicationContext.js';
import WorkerContext from '../context/worker/workerContext.js';
// import Results from '../views/results.js';
const classNames = require('classnames');
export default function EmployerJobApplicationListItem(props) {
  const applicationContext = useContext(ApplicationContext);
  const workerContext = useContext(WorkerContext);
  const { workers } = workerContext;

  const { allApplications, getAllApplications, acceptApplication, declineApplication } = applicationContext;
  const [x, setX] = useState(0);
  const app = props.application;
  //console.log(workers);
  const onSubmitAccept = (e, app) => {
    e.preventDefault();
    acceptApplication(app.id);
    //console.log(app);
    //setX(app.id);
  };

  //const worker = workers.find();
  const worker = workers.find(({ id }) => id === app.worker_id);
  console.log(worker);
  const profileLink = `workers/${worker.id}`;
  const onSubmitDecline = (e, app) => {
    e.preventDefault();
    declineApplication(app.id);
    //console.log(app);
    //console.log("declined");
    //setX(app.id);
  };

  return (
    <Fragment>
      <Row>
        {app.status === 'Pending' &&

          <Fragment>
            <Link to={profileLink} className="profile-link">{worker.first_name} {worker.last_name}</Link>
            <br />
            {/* <p>{app.date_applied}</p> */}
            <Button id="button-style" onClick={(e) => onSubmitDecline(e, app)}>Decline</Button>
            {/* } */}
            <br />
            {/* {app.status === 'Pending' && */}
            <Button id="button-style" onClick={(e) => onSubmitAccept(e, app)}>Accept</Button>
          </Fragment>
        }
      </Row>
    </Fragment>

  );
}