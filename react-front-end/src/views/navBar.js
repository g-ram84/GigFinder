import React, { useContext, useState, Fragment } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import GigfinderContext from '../context/gigfinder/gigfinderContext.js';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const NavBar = (props) => {
  const gigfinderContext = useContext(GigfinderContext);
  const { loggedInUser, loggedInUserType } = gigfinderContext;
  let loginMessage = '';
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  if (loggedInUserType === 1) {
    loginMessage = `Logged in as ${loggedInUser.first_name} ${loggedInUser.last_name}`;

  } else if (loggedInUserType === 2) {
    loginMessage = `Logged in as ${loggedInUser.company_name} ${loggedInUser.contact_name}`;
  }
  const logout = () => {
    gigfinderContext.logOut();
  };
  const clearPage = () => {
    gigfinderContext.jobs.length = 0;
  };

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={RRNavLink} exact to="/" activeClassName="active" onClick={clearPage}>GigFinder</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          </Nav>
          {loggedInUserType === 0 &&
            <Fragment>
              <NavbarText>
                <NavLink tag={RRNavLink} exact to="/login" activeClassName="active">Login</NavLink>
              </NavbarText>
              <NavbarText>
                <NavLink tag={RRNavLink} exact to="/register" activeClassName="active">Register</NavLink>
              </NavbarText>
            </Fragment>
          }
          {loggedInUserType !== 0 &&
            <Fragment>
              <NavbarText>{loginMessage}</NavbarText>
              <NavbarText>
                <NavLink tag={RRNavLink} exact to="/" onClick={logout} >Logout</NavLink>
              </NavbarText>
            </Fragment>
          }
        </Collapse>
      </Navbar>
    </div>
  );
};
export default NavBar;