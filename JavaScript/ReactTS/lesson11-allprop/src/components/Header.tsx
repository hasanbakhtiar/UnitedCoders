import { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { useCart } from "react-use-cart";
import { LangContext } from "../lang/LangContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [lang,setLang] = useContext(LangContext);
  const data:any = useSelector(a=>a);
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
       <button type="button" className="btn btn-primary position-relative mx-3">
        <i className="fa-solid fa-cart-shopping" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {totalItems}
        </span>
      </button>
       </LinkContainer>
 
      <LinkContainer to="/wishlist">
       <button type="button" className="btn btn-danger border position-relative mx-3">
       <i className="fa-solid fa-heart"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
          {data.wish.length}
        </span>
      </button>
      </LinkContainer>
      <Button className="ms-3" variant="warning" onClick={()=>{
        lang === 'en'? setLang("az"): setLang('en');
       }}>{lang==="en"?"AZ":"EN"}</Button>
       <LinkContainer to="/admin"><Button variant="outline-light ms-3">Admin</Button></LinkContainer>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
