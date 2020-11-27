import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import GigfinderContext from '../context/gigfinder/gigfinderContext.js';
import WorkerList from '../components/workerList';
// import workers from '../../../express-back-end/routes/workers.js';

function Profile(props) {
  const [worker, setWorker] = useState();
  useEffect(() => {
    axios.get(
      `/api/workers/${props.match.params.id}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
    })
      .then((res) => {
        console.log('res', res.data[0])
        setWorker(res.data[0])
      })
  }, [props.match.params.id])

  if (worker === undefined) {
    return (
      <h1>Loading!</h1>
    )
  }
  console.log('profile', worker)
  return (

    <div>
      <WorkerList worker={worker}/>
    </div>
  );
}

export default Profile;