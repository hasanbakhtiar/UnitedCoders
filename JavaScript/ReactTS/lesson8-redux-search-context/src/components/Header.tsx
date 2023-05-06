import { useContext, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { ProductContext } from '../context/ProductContext';

const Header = () => {
  const [productData] = useContext(ProductContext);
  const [query,setQuery] = useState();
  const [searchvalue,setSearchvalue] = useState();
  const searchSubmit =(e:React.FormEvent)=>{
    e.preventDefault();
      setSearchvalue(query);
  }
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
          <LinkContainer to="/products">
          <Nav.Link >Products</Nav.Link>
          </LinkContainer>
            
          <LinkContainer to="/blog">
          <Nav.Link >Blog List</Nav.Link>
          </LinkContainer>
          </Nav>
<div>
  {/* Button trigger modal */}
  <button type="button" className="btn btn-primary me-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
   Search
  </button>
  {/* Modal */}
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel"> searching...</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
        <form onSubmit={searchSubmit}>
              <div className="input-group mb-3">
              <input onChange={(e:any)=>setQuery(e.target.value)} type="text" className="form-control" placeholder="Search products" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
            </div>
            {productData.filter((value:any)=>value.title.toLocaleLowerCase().includes(searchvalue)).map((item:any) => { 
               return <p><img src={item.image} width={50} alt="" />{item.title}</p>
             })}
</form>
        </div>
        
     
      </div>
    </div>
  </div>
</div>

          
          
          <LinkContainer to='/dashboard'>
          <Button variant='warning'>Dashboard</Button>
          </LinkContainer>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header