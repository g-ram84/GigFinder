import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './job.scss';


const Register = (props) => {
    const [showMode, setShowMode] = useState('')
    return (
      <div className="register">
          <Button id="button-style" onClick={()=> setShowMode('employer')}>Register as Employer</Button>
          <Button id="button-style" onClick={()=> setShowMode('worker')}>Register as Worker</Button>
      {showMode === 'worker' &&
  
    <Form className="register-form">

      <FormGroup>
        <Label for="first name">First Name</Label>
        <Input type="text" name="first name" id="first name" placeholder="Enter first name" />
      </FormGroup>

      <FormGroup>
        <Label for="last name">Last Name</Label>
        <Input type="text" name="last name" id="last name" placeholder="Enter last name" />
      </FormGroup>

      <FormGroup>
        <Label for="phone number">Phone Number</Label>
        <Input type="text" name="phone number" id="phone number" placeholder="Enter phone number" />
      </FormGroup>

      <FormGroup>
        <Label for="email">Email Required</Label>
        <Input type="email" name="email" id="email" placeholder="Enter email" />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" name="password" id="password" placeholder=" password" />
      </FormGroup>

      <FormGroup>
        <Label for="resume">Upload Resume</Label>
        <Input type="file" name="resume" id="resume" placeholder="Upload resume" />
      </FormGroup>
      <FormGroup>
        <Label for="description">Upload Profile Picture</Label>
        <Input type="file" name="pic" id="pic" placeholder="Upload Profile Pic" />
      </FormGroup>

      <Button onClick={ ''/*setpath to as worker or employer*/} >Register!</Button>
    </Form >
}

{showMode === 'employer' &&
  
  <Form className="register-form">

    <FormGroup>
      <Label for="company name">Company Name</Label>
      <Input type="text" name="company name" id="company name" placeholder="Enter company name" />
    </FormGroup>

    <FormGroup>
      <Label for="contact name">Contact Name</Label>
      <Input type="text" name="contact name" id="contact name" placeholder="Enter contact name" />
    </FormGroup>

    <FormGroup>
      <Label for="phone number">Phone Number</Label>
      <Input type="text" name="phone number" id="phone number" placeholder="Enter phone number" />
    </FormGroup>

    <FormGroup>
      <Label for="email">Email Required</Label>
      <Input type="email" name="email" id="email" placeholder="Enter email" />
    </FormGroup>
    <FormGroup>
      <Label for="password">Password</Label>
      <Input type="password" name="password" id="password" placeholder=" password" />
    </FormGroup>

    <FormGroup>
      <Label for="website">Website</Label>
      <Input type="url" name="website" id="website" placeholder="website" />
    </FormGroup>
    <FormGroup>
      <Label for="description">Company Description</Label>
      <Input type="text" name="description" id="description" placeholder="Enter company description" />
    </FormGroup>

    <Button onClick={ ''/*setpath to as worker or employer*/} >Register!</Button>
  </Form >
}


    </div>

  );
};

export default Register;