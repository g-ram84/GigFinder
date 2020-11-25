import React, { useContext, useState } from 'react';
import { Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';
import GigfinderContext from '../context/gigfinder/gigfinderContext.js';

const SearchBar = () => {
  const gigfinderContext = useContext(GigfinderContext);
  const [searchTerm, setSearchTerm] = useState("");
  const onChange = e => setSearchTerm(e.target.value);

  const newQuery = (event) => {
    props.setQuery(event.target.value)
  }
  const search = () => {
    gigfinderContext.searchJobs()
  }
  
  const onSubmit = e => {
    e.preventDefault();
    gigfinderContext.searchJobs(searchTerm);
  };


  return (
    <Row>
      <Col>
        <Form onSubmit={onSubmit}>
          <FormGroup>
            <Input type="text" name="job_title" id="jobTitle" placeholder="Job Search" value={searchTerm} onChange={onChange} />
          </FormGroup>
          <Button >Submit Job Request</Button>
        </Form>
      </Col>
    </Row>
  );
};
export default SearchBar;