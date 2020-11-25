import React from "react";
import "./jobListItem.scss"
import { Router, Route, useHistory } from 'react-router-dom';
import Results from '../views/results.js'

const classNames = require('classnames');


export default function JobListItem(props) {
  return (
    <div className="jobs_item">
      <a className="job_header" href={`/${props.jobId}`}>
        <strong>{props.title}</strong>
      </a>
      <br />
        ${props.wage}/hr
      <br />
      {props.positions} positions available!
      <body className="job_des">
        {props.description}
      </body>

      <footer className="start_date">
        Work starts {props.jobDate}
      </footer>
      <br />
    </div>
  );
}
