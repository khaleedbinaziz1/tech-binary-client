import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import './Navigationbar.css';
import logo from '../../../images/logo.jpg';
import { Link } from 'react-router-dom';
import Dashboard from './../../Dashboard/Dashboard/Dashboard';

const Navigationbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <div>
      <Navbar style={{backgroundImage : 'linear-gradient(to right, #24013B , #7000C4)'}} light expand="md">
        <NavbarBrand href="/"><img src={logo} alt="" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem className="text-white pt-2 ml-5">
              <Link style={{color: 'white' , textDecoration:'none'}} to="/">Home</Link>
            </NavItem>
            <NavItem className="text-white pt-2 ml-5">
              <Link style={{color: 'white', textDecoration:'none'}} to="/aboutUs">About</Link>
            </NavItem>
            <NavItem  className="pt-2 ml-5">
              <Link style={{color: 'white' ,textDecoration:'none'}} to="/booking">Services</Link>
            </NavItem>
            <NavItem className="text-white pt-2 ml-5 mr-5">
              <Link style={{color: 'white', textDecoration:'none'}} to="/contact">Contact</Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Dashboard options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/bookingForm">Booking</Link>
                </DropdownItem>
                <DropdownItem>
                <Link to="/review">Review</Link>
                </DropdownItem>
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigationbar