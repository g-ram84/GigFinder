import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const AddJobForm = (props) => {
  return (
    <Form >

      <FormGroup>
        <Label for="jobTitle">Job Title</Label>
        <Input type="text" name="jobTitle" id="jobTitle" placeholder="Enter job title" />
      </FormGroup>

      <FormGroup>
        <Label for="jobDescription">Job Description</Label>
        <Input type="text" name="jobDescription" id="jobDescription" placeholder="Enter job description" />
      </FormGroup>

      <FormGroup>
        <Label for="wage">Wage</Label>
        <Input type="text" name="wage" id="wage" placeholder="Enter wage" />
      </FormGroup>

      <FormGroup>
        <Label for="date">Date Required</Label>
        <Input type="date" name="date" id="date" placeholder="Select date" />
      </FormGroup>

      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="skills">Skills</Label>
            <Input type="text" name="skills" id="skills" placeholder="Enter any specific skills required" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <Button className="mb-0">Add Skill to list</Button>
        </Col>
      </Row>

      <FormGroup>
        <Label for="employeeQuantity">Number of Employees Required</Label>
        <Input type="select" name="employeeQuantity" id="employeeQuantity">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>


      <Button>Submit Job Request</Button>
    </Form >
  );
};

export default AddJobForm;