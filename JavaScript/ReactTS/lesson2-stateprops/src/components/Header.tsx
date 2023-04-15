import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap';
const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <LinkContainer to='/'>
          <Nav.Link >Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/products'>
          <Nav.Link >Products()</Nav.Link>
          </LinkContainer>
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header