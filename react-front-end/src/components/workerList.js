import React, { useContext } from 'react';
import GigfinderContext from '../context/gigfinder/gigfinderContext.js';
import WorkerListItem from './workerListItem';

function WorkerList(props) {
  const gigfinderContext = useContext(GigfinderContext);
  const { workers } = gigfinderContext;
    return (
      <div>
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
    )
}

export default WorkerList;