import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Button } from 'reactstrap'
import "./jobListItem.scss"


export default function Apply() {
  // const [application, setApplication] = useState(false);
  // useEffect(() => {
  //   addApplication();
  // }, []);
  // function addApplication() {
  //   Axios.get(`api/applications?worker_id=${worker_id}`)
  //     .then(res => {
  //       console.log('favourite', res.data)
  //       setApplication(res.data.id)
  //     })
  // }
  return (
    <div>
      <Button>Apply Now!</Button>
    </div>
  )
}
