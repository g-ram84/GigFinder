import React, { useContext } from 'react';
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

import GigfinderContext from '../context/gigfinder/gigfinderContext.js';

function Login() {

  const gigfinderContext = useContext(GigfinderContext);
  const { loggedInUser } = gigfinderContext;
  // logWorkerIn,
  //       logEmployerIn,
  //       logOut
  const employerLogin = () => {
    gigfinderContext.logEmployerIn();
    console.log(loggedInUser);
  };
  const workerLogin = () => {
    gigfinderContext.logWorkerIn();
    console.log(loggedInUser);
  };

  return (
    <div>
      <h1>Super secure login page</h1>
      <Container>
        <Row>
          <Col>
            <Button className="mx-2" onClick={workerLogin}>Worker Login</Button>
            <Button className="mx-2" onClick={employerLogin}>Employer Login</Button>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default Login;