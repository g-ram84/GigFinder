import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';
import GigfinderContext from '../context/gigfinder/gigfinderContext.js';
import gigfinderState, {getApplications} from '../context/gigfinder/gigfinderState.js'

import "./jobListItem.scss";
import { render } from 'react-dom';


export default function SeeApplications(props) {
  const history = useHistory()
  const gigfinderContext = useContext(GigfinderContext);
  const { loggedInUser } = gigfinderContext;
 
console.log(getApplications, "getApplications gives us this")
//   const applicants = 
// only render if
//   is allowed to see function
// return("")
// else return
  return (
    <div>
      <p>list of applicants</p>// return .map with applicants. only employers who own job can see the applicants
    </div>
  );
}
