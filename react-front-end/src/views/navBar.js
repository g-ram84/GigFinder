import React, { useContext, useState } from 'react';
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
  let loginMessage = '';
  const loggedInUser = gigfinderContext.loggedInUser;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  if (loggedInUser.first_name) {
    loginMessage = `Logged in as ${loggedInUser.first_name} ${loggedInUser.last_name}`;

  } else if (loggedInUser.company_name) {
    loginMessage = `Logged in as ${loggedInUser.company_name} ${loggedInUser.contact_name}`;
  }

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={RRNavLink} exact to="/" activeClassName="active">GigFinder</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} exact to="/login" activeClassName="active">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} exact to="/register" activeClassName="active">Register</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>{loginMessage}</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default NavBar;