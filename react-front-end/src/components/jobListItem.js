import React from "react";
import "./jobListItem.scss";

import { Link } from 'react-router-dom';
import Results from '../views/results.js';


const classNames = require('classnames');


export default function JobListItem(props) {
  console.log(props)
  return (
    <body>

      <div className="job_item">
        <Link className="job_header" exact to={`/${props.jobId}`}>
          <strong>{props.title}</strong>
        </Link>
        <body className="job_des">
          {props.description}
        </body>
        <span className="extra_info">
          <br />
            ${props.wage}/hr
          <br />
          {props.positions} positions available!
        </span>
        <footer className="start_date">
          Work starts {props.jobDate}
        </footer>
      </div>
    </body>
  );
}
