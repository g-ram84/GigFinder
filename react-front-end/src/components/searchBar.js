import React, { useContext, useState } from 'react';
import { Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';
import JobContext from '../context/job/jobContext.js';

const SearchBar = (props) => {
  const jobContext = useContext(JobContext);
  const [searchTerm, setSearchTerm] = useState("");
  const onChange = e => setSearchTerm(e.target.value);

  // const newQuery = (event) => {
  //   props.setQuery(event.target.value);
  // };
  // const search = () => {
  //   jobContext.searchJobs();
  // };

  const onSubmit = e => {
    e.preventDefault();
    jobContext.searchJobs(searchTerm)
      .then(() => {
        setSearchTerm('');
      });
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