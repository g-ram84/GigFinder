import React, { useContext, useState } from 'react';
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
  //Add useState here to set name
  const test = gigfinderContext.loggedInUser;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  if (test) {
    console.log(test.first_name);
  }


  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">GigFinder</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/register">Register</NavLink>
            </NavItem>
            <h1>test</h1>
          </Nav>
          <NavbarText>Corporate Tinder!</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;