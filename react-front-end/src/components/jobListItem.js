import React from "react";
<<<<<<< HEAD
import "./jobListItem.scss"
import { Router, Route, useHistory, Link } from 'react-router-dom';
import Results from '../views/results.js'
=======
import "./jobListItem.scss";
import { Link } from 'react-router-dom';
import Results from '../views/results.js';
>>>>>>> master

const classNames = require('classnames');


export default function JobListItem(props) {
  return (
    <div className="jobs_item">
      <Link className="job_header" exact to={`/${props.jobId}`}>
<<<<<<< HEAD
=======
        {/* <Link className=“job_header” exact to={`/${props.jobId}`}> */}
>>>>>>> master
        <strong>{props.title}</strong>
      </Link>
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
