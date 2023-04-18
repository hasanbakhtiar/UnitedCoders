import React, { useContext } from 'react'
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap';
import { ProductContext } from '../context/ProductContext';
import { ThemeContext } from '../context/ThemeContext';
const Header = () => {
  const [products] = useContext(ProductContext);
  const [mode,setMode] = useContext<any>(ThemeContext);


  const settingMode = ()=>{
      if (mode === 'light') {
         setMode('dark');
         localStorage.setItem('mode','dark'); 
      }else{
        setMode('light');
        localStorage.setItem('mode','light'); 

      }
  }
  
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
          <Nav.Link >Products({products.length})</Nav.Link>
          </LinkContainer>
         
        </Nav>
        <Button variant={mode==='dark' ? 'Light' :"Dark"} onClick={settingMode}>{mode==='dark' ? 'Light' :"Dark"}</Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header