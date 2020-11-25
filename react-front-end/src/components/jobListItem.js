import React from "react";
import "./jobListItem.scss"

const classNames = require('classnames');


export default function JobListItem(props) {
  console.log(props.jobDate)
  return (
    <div className="jobs_item">
     <header className="job_header">
        <strong>{props.title}</strong>
      </header>
      <br/>
        ${props.wage}/hr
      <br/>
        {props.positions} positions available!
      <body className="job_des">
        {props.description}
      </body>

      <footer className="start_date">
        Work starts {props.jobDate} 
      </footer>
      <br/>
    </div>
  );
}