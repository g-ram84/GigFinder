import React from 'react';
import AddJobForm from './addJobForm';
import { Router } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';


function AddJob() {
  return (
    <Container fluid>
      <Row>
        <h1 className="center-text m-auto">Create a Job!</h1>
      </Row>
      <Row noGutters>
        <Col />
        <Col>
          <AddJobForm />
        </Col>
        <Col />
      </Row>

    </Container>
  );
}
export default AddJob;