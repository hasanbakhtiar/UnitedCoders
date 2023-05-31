import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";

const BlogForm = ({onFormSubmit}:any) => {
    const [photo,setPhoto] = useState<string>("");
    const [titleaz,setTitleaz] = useState<string>("");
    const [titleen,setTitleen] = useState<string>("");
    const [price,setPrice] = useState<string>("");
    const [stock,setStock] = useState<any>(true);
    


    const blogFormSubmit =(e:React.FormEvent)=>{
        e.preventDefault();
            // console.log(iphoto,ititle,idesc);
        if (!photo || !titleaz || !price || !titleen) {
            alert('please,fill the input');
        }else{
            onFormSubmit({
                photo,
                titleaz,
                titleen,
                price,
                stock
            })
        }
    }
    
    
  return (
    <div className="d-flex align-items-center justify-content-center">
      <Col md={6}>
        <Form onSubmit={blogFormSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Photo url</Form.Label>
            <Form.Control type="text" value={photo} placeholder="Enter photo link" onChange={e=>setPhoto(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Title AZ</Form.Label>
            <Form.Control type="text" value={titleaz} placeholder="Enter title az" onChange={e=>setTitleaz(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Title EN</Form.Label>
            <Form.Control type="text" value={titleen} placeholder="Enter title en" onChange={e=>setTitleen(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" value={price} placeholder="Enter price" onChange={e=>setPrice(e.target.value)}/>
          </Form.Group>
            <div className="form-check my-3">
            <input className="form-check-input" type="checkbox" checked onChange={e=>setStock(e.target.checked)}  id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
                Stock
            </label>
            </div>

          <Button variant="primary" type="submit">
            Share
          </Button>
        </Form>
      </Col>
    </div>
  );
};

export default BlogForm;
