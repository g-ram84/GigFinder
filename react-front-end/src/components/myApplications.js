import React from 'react';
import { Link } from 'react-router-dom';

export default function MyApplications(props) {
  console.log("props inMyApplication",props)
  return (
    <div>
      <Link className="bio" exact to={`/workers/${props.worker}`}>
        <strong>{props.email}</strong>
      </Link>
      <br/>
      {props.status}
      <br/>
      {props.date_applied}
    </div>
    )
}
