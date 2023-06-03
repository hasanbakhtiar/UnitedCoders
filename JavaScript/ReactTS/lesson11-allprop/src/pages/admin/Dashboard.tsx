import React, { useContext } from 'react'
import { Button, Table } from 'react-bootstrap'
import {  useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap';
import { LangContext } from '../../lang/LangContext';

const Dashboard = () => {

 
    
const productData:any = useSelector(product=>product);
    const [lang] = useContext(LangContext);
  return (
    <>
    
    <h1 className='my-5 text-center'>Admin Panel</h1>
    <LinkContainer to="/admin/add"><Button className='mb-2' variant='success'>Add</Button></LinkContainer>
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Photo</th>
        <th>Title</th>
        <th>Stock alert</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    {productData.product.map((item:any,i:number)=>(
     <tr key={i}>
     <td>{i+1}</td>
     <td><img width={100} src={item.photo} alt="" /></td>
     <td>{lang === 'en'? item.titleen:item.titleaz}</td>
     <td>{item.stock ? <span className="badge text-bg-success">in stock</span>
:<span className="badge text-bg-danger">stock out</span>
}</td>
     <td><LinkContainer to={`/dashboard/edit/${item.id}`}><Button variant='warning'>Edit</Button></LinkContainer></td>
     <td><Button variant='danger'>Delete</Button></td>
   </tr>
    ))}
 
     
    </tbody>
  </Table>
    
    
    </>
  )
}

export default Dashboard