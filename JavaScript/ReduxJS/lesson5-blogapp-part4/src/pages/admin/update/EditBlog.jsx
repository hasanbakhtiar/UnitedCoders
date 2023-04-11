import React from 'react'
import BlogForm from '../BlogForm'
import { connect, useDispatch } from 'react-redux'
import {  editBlogFromDatabase } from '../../../actions/blogAction';
import { useNavigate } from 'react-router-dom';

const EditBlog = ({pvalue}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <div>
        <h1 className='my-5 text-center'>Edit Blog</h1>
        <BlogForm editblog={pvalue} 
        
        onFormSubmit={item=>{
            dispatch(editBlogFromDatabase(pvalue.id,item));
            navigate('/dashboard');
        }}
        />
    </div>
  )
}


const mapStateToProps =(state)=>{
    const link = window.location.pathname.slice(16,999);
    return{
        pvalue:state.find(p=>p.id === link)
    }
}


export default connect(mapStateToProps)(EditBlog)