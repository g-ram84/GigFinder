import React from 'react';

export default function MyApplications(props) {
  return (
    <div>
      {props.email}
      {props.status}
      {props.date_applied}
    </div>
  )
}
