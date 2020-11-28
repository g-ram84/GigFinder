import React, { useContext, dispatch } from 'react';
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import UserContext from '../context/user/userContext.js';

function Login() {
  const userContext = useContext(UserContext);
  //const { loggedInUser, logWorkerIn, logEmployerIn } = userContext;

  const history = useHistory();
  const redirect = () => {
    history.push('/');
  };

  const workerLogin = () => {
    userContext.logWorkerIn()
      .then(() => {
        redirect();
      });
  };

  const employerLogin = () => {
    userContext.logEmployerIn()
      .then(() => {
        redirect();
      });
  };

  // const logout = () => {
  //   gigfinderContext.logOut();
  // };


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
            <Button className="m-2" onClick={workerLogin}>Worker Login</Button>
            <Button className="m-2" onClick={employerLogin}>Employer Login</Button>
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