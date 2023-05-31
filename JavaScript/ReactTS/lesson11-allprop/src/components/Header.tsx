import { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { useCart } from "react-use-cart";
import { LangContext } from "../lang/LangContext";

const Header = () => {
  const [lang,setLang] = useContext(LangContext);
  const {totalItems} = useCart();
  return (
    <Navbar bg="dark" expand="lg" className="navbar-dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Asus</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/products">
              <Nav.Link>Products</Nav.Link>
            </LinkContainer>
          </Nav>
       <LinkContainer to="/cart">
       <button type="button" className="btn btn-primary position-relative">
        <i className="fa-solid fa-cart-shopping" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {totalItems}
        </span>
      </button>
       </LinkContainer>
       <Button className="ms-3" variant="warning" onClick={()=>{
        lang === 'en'? setLang("az"): setLang('en');
       }}>{lang==="en"?"AZ":"EN"}</Button>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
