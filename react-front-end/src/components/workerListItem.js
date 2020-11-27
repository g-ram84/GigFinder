import React from 'react';
import './workerListItem.scss'

export default function WorkerListItem(props) {
  return (
    <div className="worker_list">
      <img
        className="worker_item-image"
        src={props.avatar}
        alt={props.lastName}
      />
      <br />
      <span className="worker_name">
        {props.firstName} {props.lastName}
      </span>
      <br />
      <span>
        {props.email}
        <br />
        {props.phone}
      </span>


    </div>
  )
}