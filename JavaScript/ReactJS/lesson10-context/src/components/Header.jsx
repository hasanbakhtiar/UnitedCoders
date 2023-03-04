import { useContext } from 'react';
import {Container,Nav,Navbar} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { ProductContext } from '../context/ProductContext';

function Header() {
  const [products] = useContext(ProductContext)
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Best Shop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">

          <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/products">
          <Nav.Link>Products({products.length})</Nav.Link>
          </LinkContainer>
       
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Header;