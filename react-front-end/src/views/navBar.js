import React, { useContext, useState, Fragment } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import UserContext from '../context/user/userContext.js';
import JobContext from '../context/job/jobContext.js';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavbarText
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { loggedInUser, loggedInUserType, logOut } = useContext(UserContext);
  const { clearJobs } = useContext(JobContext);

  let loginMessage = '';
  if (loggedInUserType === 1) {
    loginMessage = `Logged in as ${loggedInUser.first_name} ${loggedInUser.last_name}`;
  } else if (loggedInUserType === 2) {
    loginMessage = `Logged in as ${loggedInUser.contact_name || "Steve Jobs"}`;
  }

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          </Nav>
          {loggedInUserType === 0 &&
            <Fragment>
              <NavbarBrand tag={RRNavLink} exact to="/" activeClassName="active" onClick={clearJobs}>GigFinder</NavbarBrand>
              <NavbarText>
                <NavLink tag={RRNavLink} exact to="/login" activeClassName="active">Login</NavLink>
              </NavbarText>
              <NavbarText>
                <NavLink tag={RRNavLink} exact to="/register" activeClassName="active">Register</NavLink>
              </NavbarText>
            </Fragment>
          }
          {loggedInUserType === 1 &&
            <Fragment>
              <NavbarBrand tag={RRNavLink} exact to="/" activeClassName="active" onClick={clearJobs}>GigFinder</NavbarBrand>
              <NavbarText>{loginMessage}</NavbarText>
              <NavbarText>
                <NavLink tag={RRNavLink} exact to={`/workers/${loggedInUser.id}`} >My Profile</NavLink>
              </NavbarText>
              <NavbarText>
                <NavLink tag={RRNavLink} exact to="/" onClick={logOut} >Logout</NavLink>
              </NavbarText>
            </Fragment>
          }
          {loggedInUserType === 2 &&
            <Fragment>
              <NavbarBrand tag={RRNavLink} exact to="/" activeClassName="active" onClick={clearJobs}>GigFinder</NavbarBrand>
              <NavbarText>{loginMessage}</NavbarText>
              <NavbarText>
                <NavLink tag={RRNavLink} exact to="/addJob">Add New Job</NavLink>
              </NavbarText>
              <NavbarText>
                <NavLink tag={RRNavLink} exact to="/" onClick={logOut} >Logout</NavLink>
              </NavbarText>
            </Fragment>
          }
        </Collapse>
      </Navbar>
    </div>
  );
};
export default NavBar;