import React, { useContext } from 'react';
import WorkerContext from '../context/worker/workerContext.js';
import WorkerListItem from './workerListItem';

function WorkerList(props) {
  const workerContext = useContext(WorkerContext);
  //const { workers } = workerContext.searchWorkers();
  //console.log(workers);
  return (
    <div className="text-colour-profile">
      <WorkerListItem
        workerId={props.worker.id}
        firstName={props.worker.first_name}
        lastName={props.worker.last_name}
        email={props.worker.email}
        phone={props.worker.phone}
        avatar={props.worker.avatar_url}
        sin={props.worker.sin}
        resume={props.worker.resume_upload}
      />
    </div>
  );
}

export default WorkerList;