import React, { useContext, dispatch } from 'react';
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import UserContext from '../context/user/userContext.js';

function Login() {
  const userContext = useContext(UserContext);
  const { loggedInUser, logWorkerIn, logEmployerIn, } = userContext;

  const workerRegister = () => {
  };

  const employerRegister = () => {
  };

  return (
    <div>
      <h1>Super secure login page</h1>
      <Container>
        <Row>
          <Col>
            <Button className="m-2" onClick={logWorkerIn}>Worker Login</Button>
            <Button className="m-2" onClick={logEmployerIn}>Employer Login</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* <Button className="m-2" onClick={workerRegister}>Worker Register</Button> */}
            {/* <Button className="m-2" onClick={employerRegister}>Employer Register</Button> */}
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default Login;