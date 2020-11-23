import React from "react";

const classNames = require('classnames');


export default function JobListItem(props) {
  const jobList = classNames('jobList', {
    'jobs__item--selected': props.selected,
  });
  return (
    <li className={jobList} onClick={props.setjob}>
      <img
        className="jobs__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}