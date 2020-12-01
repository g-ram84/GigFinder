import React, { Fragment } from "react";
import "./jobListItem.scss";
import { Link } from 'react-router-dom';
import EmployerJobApplicationList from './employerJobApplicationList';

const classNames = require('classnames');
export default function EmployerJobListItem(props) {

  return (
    <Fragment>
      <div className="job_item">
        {/* <strong>Employer Id {props.employer_id}</strong>
        <strong>Job Id {props.jobId}</strong> */}
        <Link className="job_header" exact to={`/jobs/${props.jobId}`}>
          <strong>{props.title}</strong>
        </Link>
        <div className="job_des">
          {props.description}
        </div>
        <span className="extra_info">
          <br />
            ${props.wage}/hr
          <br />
          {props.positions} positions available!
        </span>
        <footer className="start_date">
          Work starts {props.jobDate}
        </footer>
        <EmployerJobApplicationList employer_id={props.employer_id} job_id={props.jobId} />
      </div>
    </Fragment>
  );
}