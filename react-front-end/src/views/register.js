import React from 'react';
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';

const register = (props) => {
  return (
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
        <Label for="picture">upload profile picture</Label>
        <Input type="file" name="pic" id="pic" placeholder="Upload Profile Pic" />
      </FormGroup>

      <FormGroup>
        <Label for="Brief Bio">Brief Bio</Label>
        <Input type="text" name="Brief Bio" id="bio" placeholder="Enter Brief Bio" />
      </FormGroup>

      <FormGroup>
        <Label for="SIN">SIN</Label>
        <Input type="text" name="SIN" id="SIN" placeholder="Enter SIN" />
      </FormGroup>

      <FormGroup>
        <Label for="Company Name">Company Name</Label>
        <Input type="text" name="company" id="company" placeholder="Enter Company Name" />
      </FormGroup>

      <FormGroup>
        <Label for="Contact Person">Contact Person</Label>
        <Input type="text" name="Contact" id="Contact" placeholder="Enter Contact Name" />
      </FormGroup>

      <FormGroup>
        <Label for="SIN">SIN</Label>
        <Input type="text" name="SIN" id="SIN" placeholder="Enter SIN" />
      </FormGroup>

   

  


      <Button>Register!</Button>
    </Form >
  );
};

export default register;