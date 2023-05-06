import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";

const BlogForm = ({onFormSubmit,editblog}:any) => {
    const [iphoto,setIPhoto] = useState(editblog? editblog.photo:"");
    const [ititle,setITitle] = useState(editblog? editblog.title:"");
    const [idesc,setIDesc] = useState( editblog ? editblog.desc:"");
    


    const blogFormSubmit =(e:React.FormEvent)=>{
        e.preventDefault();
            // console.log(iphoto,ititle,idesc);
        if (!iphoto || !ititle || !idesc) {
            alert('please,fill the input');
        }else{
            onFormSubmit({
                photo:iphoto,
                title:ititle,
                desc:idesc,
            })
        }
    }
    
    
  return (
    <div className="d-flex align-items-center justify-content-center">
      <Col md={6}>
        <Form onSubmit={blogFormSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Photo url</Form.Label>
            <Form.Control type="text" value={iphoto} placeholder="Enter photo link" onChange={e=>setIPhoto(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={ititle} placeholder="Enter title" onChange={e=>setITitle(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" value={idesc} placeholder="Enter Description" onChange={e=>setIDesc(e.target.value)}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Share
          </Button>
        </Form>
      </Col>
    </div>
  );
};

export default BlogForm;
