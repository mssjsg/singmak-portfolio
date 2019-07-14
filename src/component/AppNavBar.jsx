import React from 'react';
import {
  Navbar, Nav,
} from 'react-bootstrap';

const AppNavBar = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Sing Mak</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#intro">Intro</Nav.Link>
        <Nav.Link href="#works">Works</Nav.Link>
        {/* <Nav.Link href="#personal-projects">Personal Projects</Nav.Link> */}
        <Nav.Link href="">Blog</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default AppNavBar;
