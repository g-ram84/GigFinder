import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './job.scss';


const Register = (props) => {
    const [showMode, setShowMode] = useState('')
    return (
      <div className="register">
      <button onClick={()=> setShowMode('employer')}>Register as Employer</button>
      <button onClick={()=> setShowMode('worker')}>Register as Worker</button>
      {showMode === 'worker' &&
  
    <Form >

      <FormGroup>
        <Label for="first name">first name</Label>
        <Input type="text" name="first name" id="first name" placeholder="Enter first name" />
      </FormGroup>

      <FormGroup>
        <Label for="last name">last name</Label>
        <Input type="text" name="last name" id="last name" placeholder="Enter last name" />
      </FormGroup>

      <FormGroup>
        <Label for="phone number">phone number</Label>
        <Input type="text" name="phone number" id="phone number" placeholder="Enter phone number" />
      </FormGroup>

      <FormGroup>
        <Label for="email">email Required</Label>
        <Input type="email" name="email" id="email" placeholder="Enter email" />
      </FormGroup>
      <FormGroup>
        <Label for="password">password</Label>
        <Input type="password" name="password" id="password" placeholder=" password" />
      </FormGroup>

      <FormGroup>
        <Label for="resume">upload resume</Label>
        <Input type="file" name="resume" id="resume" placeholder="Upload resume" />
      </FormGroup>
      <FormGroup>
        <Label for="description">upload profile description</Label>
        <Input type="file" name="pic" id="pic" placeholder="Upload Profile Pic" />
      </FormGroup>


      <FormGroup>
        <Label for="SIN">SIN</Label>
        <Input type="text" name="SIN" id="SIN" placeholder="Enter SIN" />
      </FormGroup>

      <Button onClick={ ''/*setpath to as worker or employer*/} >Register!</Button>
    </Form >
}

{showMode === 'employer' &&
  
  <Form >

    <FormGroup>
      <Label for="company name">company name</Label>
      <Input type="text" name="company name" id="company name" placeholder="Enter company name" />
    </FormGroup>

    <FormGroup>
      <Label for="contact name">contact name</Label>
      <Input type="text" name="contact name" id="contact name" placeholder="Enter contact name" />
    </FormGroup>

    <FormGroup>
      <Label for="phone number">phone number</Label>
      <Input type="text" name="phone number" id="phone number" placeholder="Enter phone number" />
    </FormGroup>

    <FormGroup>
      <Label for="email">email Required</Label>
      <Input type="email" name="email" id="email" placeholder="Enter email" />
    </FormGroup>
    <FormGroup>
      <Label for="password">password</Label>
      <Input type="password" name="password" id="password" placeholder=" password" />
    </FormGroup>

    <FormGroup>
      <Label for="website">website</Label>
      <Input type="url" name="website" id="website" placeholder="website" />
    </FormGroup>
    <FormGroup>
      <Label for="description">company description</Label>
      <Input type="text" name="description" id="description" placeholder="Enter company description" />
    </FormGroup>

    <Button onClick={ ''/*setpath to as worker or employer*/} >Register!</Button>
  </Form >
}


    </div>

  );
};

export default Register;