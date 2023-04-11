import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <Navbar bg="dark" className='navbar-dark' expand="lg">
      <Container>
        <Navbar.Brand href="#home">Nature Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
          <LinkContainer to="/">
          <Nav.Link >Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/blog">
          <Nav.Link >Blog List</Nav.Link>
          </LinkContainer>
            
          </Nav>
          <LinkContainer to='/dashboard'>
          <Button variant='warning'>Dashboard</Button>
          </LinkContainer>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header