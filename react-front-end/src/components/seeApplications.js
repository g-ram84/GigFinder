import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';
import GigfinderContext from '../context/gigfinder/gigfinderContext.js';
import MyApplications from './myApplications.js';
// import gigfinderState, { getApplications } from '../context/gigfinder/gigfinderState.js';

import axios from 'axios'

import "./jobListItem.scss";
import { render } from 'react-dom';


export default function SeeApplications(props) {
//   const history = useHistory();
  const gigfinderContext = useContext(GigfinderContext);
  const { loggedInUser, getApplications, applications } = gigfinderContext;
  console.log("application", applications)
  const myApplications = applications.map(application => {
  
    return (
      <div>
         <MyApplications
            // email={workers.email}
            status={application.status}
            date={application.date_applied}
         />      
      </div>
    );
  })
};

console.log(SeeApplications)


