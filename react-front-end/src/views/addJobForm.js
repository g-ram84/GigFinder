import React, { useContext, useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import GigfinderContext from '../context/gigfinder/gigfinderContext';
const AddJobForm = () => {
  const gigfinderContext = useContext(GigfinderContext);
  const [job, setJob] = useState({
    job_title: job_title,
    hourly_wage: hourly_wage,
    date_created: date_created,
    job_date: job_date,
    job_active: job_active,
    positions: positions,
    job_description: job_description,
    employer_id: employer_id,
    location_lat: 49.6252,
    location_long: -122.482
  });

  const { job_title, hourly_wage, date_created, job_date, job_active, positions, job_description, employer_id } = job;
  const onChange = e => setJob({ ...job, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    gigfinderContext.addNewJob(job);
  };



  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label for="jobTitle">Job Title</Label>
        <Input type="text" name="job_title" id="jobTitle" placeholder="Enter job title" value={job_title} onChange={onChange} />
      </FormGroup>

      <FormGroup>
        <Label for="jobDescription">Job Description</Label>
        <Input type="text" name="job_description" id="jobDescription" placeholder="Enter job description" value={job_description} onChange={onChange} />
      </FormGroup>

      <FormGroup>
        <Label for="wage">Wage</Label>
        <Input type="number" name="hourly_wage" id="wage" placeholder="Enter wage" value={hourly_wage} onChange={onChange} />
      </FormGroup>

      <FormGroup>
        <Label for="date">Date Required</Label>
        <Input type="date" name="job_date" id="date" placeholder="Select date" value={job_date} onChange={onChange} />
      </FormGroup>

      <Label for="skills" className="mr-sm-2">Skills</Label>
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input type="text" name="skills" id="skills" placeholder="Enter any specific skills required" />
        </FormGroup>
        <Button>Add Skill to list</Button>
      </Form>

      <FormGroup>
        <Label for="employeeQuantity">Number of Employees Required</Label>
        <Input type="select" name="positions" id="employeeQuantity" value={positions} onChange={onChange}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>


      <Button >Submit Job Request</Button>
    </Form >
  );

};

export default AddJobForm;