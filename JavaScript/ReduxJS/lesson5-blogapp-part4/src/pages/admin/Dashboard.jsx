import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap';
import { removeBlog, removeBlogFromDatabase } from '../../actions/blogAction';

const Dashboard = () => {

 
    
const blogData = useSelector(blog=>blog);
    const dispatch = useDispatch();
  return (
    <>
    
    <h1 className='my-5 text-center'>Admin Panel</h1>
    <LinkContainer to="/dashboard/add"><Button className='mb-2' variant='success'>Add</Button></LinkContainer>
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Photo</th>
        <th>Title</th>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    {blogData.map((item,i)=>(
     <tr key={i}>
     <td>{i+1}</td>
     <td><img width={100} src={item.photo} alt="" /></td>
     <td>{item.title}</td>
     <td>{item.desc.slice(0,30)}...</td>
     <td><LinkContainer to={`/dashboard/edit/${item.id}`}><Button variant='warning'>Edit</Button></LinkContainer></td>
     <td><Button variant='danger' onClick={()=>{dispatch(removeBlogFromDatabase(item.id))}}>Delete</Button></td>
   </tr>
    ))}
 
     
    </tbody>
  </Table>
    
    
    </>
  )
}

export default Dashboard