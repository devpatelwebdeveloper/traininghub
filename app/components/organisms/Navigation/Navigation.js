/* eslint-disable func-names */
import React from 'react';
import $ from 'jquery';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const StyledNavbar = styled(Navbar)`
  height: 50px;
  background-color: transparent;
  border: none;
  color: white;
  z-index: 100;
  transition: background-color 1s ease 0s;
  box-shadow: 0 1px 0 rgba(12, 13, 14, 0.1), 0 1px 6px rgba(59, 64, 69, 0.1);
  &.solid {
    background-color: #00aeef;
    transition: background-color 1s ease 0s;
  }
`;

function scroll() {
  // Transition effect for navbar
  $(window).scroll(function() {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(this).scrollTop() > 450) {
      $('#top-nav').addClass('solid');
    } else {
      $('#top-nav').removeClass('solid');
    }
  });
}

export default function Navigation() {
  return (
    <>
      <StyledNavbar expand="lg" sticky="top" id="top-nav" className="">
        {scroll()}
        <Link to="/">
          <Navbar.Brand>Traininghub</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/courses">
              Courses
            </Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Link to=" " className="nav-link">
              Ielts / Celpip
            </Link>
            <Link to=" " className="nav-link">
              Recruitment
            </Link>
            <Link to=" " className="nav-link">
              {' '}
              Blogs
            </Link>
            <Link to=" " className="nav-link">
              Contact us
            </Link>
            <Link to=" " className="nav-link">
              Ctech
            </Link>
          </Nav>
        </Navbar.Collapse>
      </StyledNavbar>
    </>
  );
}
