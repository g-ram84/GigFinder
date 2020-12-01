import React, { Fragment } from "react";
import "./jobListItem.scss";
import { Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import EmployerJobApplicationList from './employerJobApplicationList';
// import Results from '../views/results.js';
const classNames = require('classnames');
export default function EmployerJobApplicationListItem(props) {
  return (
    <Fragment>
      <h1>Application List Item</h1>
      <Button >Decline Application</Button>
      <br />
      <Button >Accept Application</Button>


      {/* {application.status === 'Pending' &&
        <Button onClick={onSubmitDecline}>Decline Application</Button>
      }
      <br />
      {application.status === 'Pending' &&
        <Button onClick={(e) => onSubmitAccept(e, application)}>Accept Application</Button>
      } */}
    </Fragment>
    // <Fragment>
    //   <div className="job_item">
    //     <Link className="job_header" exact to={`/jobs/${props.jobId}`}>
    //       <strong>{props.title}</strong>
    //     </Link>
    //     <div className="job_des">
    //       {props.description}
    //     </div>
    //     <span className="extra_info">
    //       <br/>
    //         ${props.wage}/hr
    //       <br />
    //       {props.positions} positions available!
    //     </span>
    //     <footer className="start_date">
    //       Work starts {props.jobDate}
    //     </footer>
    //     <EmployerJobApplicationList />
    //   </div>
    // </Fragment>
  );
}