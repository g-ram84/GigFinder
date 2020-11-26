import React, { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import { Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';
import GigfinderContext from '../context/gigfinder/gigfinderContext.js';

import "./jobListItem.scss"
import { render } from 'react-dom';


export default function Apply() {
  const gigfinderContext = useContext(GigfinderContext);
  const { loggedInUser } = gigfinderContext;

  const onSubmit = e => {
    e.preventDefault();
    gigfinderContext.addNewApplication(loggedInUser);
  }
  return (
    <div>
      <Form onSubmit={onSubmit}>
      <Button>Apply Now!</Button>
      </Form>
    </div>
  )
}
