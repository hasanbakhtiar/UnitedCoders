import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { useCart } from 'react-use-cart';

function Header() {
  const {totalItems} = useCart();
  return (
    <Navbar bg="dark" expand="lg" className='navbar-dark'>
      <Container>
        <Navbar.Brand href="#home">Best Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <LinkContainer to="/">
            <Nav.Link >Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/products">
            <Nav.Link>Products</Nav.Link>
            </LinkContainer>
        
          </Nav>
          <LinkContainer to="/cart">
          <Button variant='primary'><i className="fa-solid fa-cart-shopping"></i>({totalItems})</Button>
          </LinkContainer>
          <LinkContainer to="/search">
          <Button className='ms-3'  variant='warning'><i style={{color:'black'}} className=" fa-solid fa-magnifying-glass"></i></Button>
          </LinkContainer>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;