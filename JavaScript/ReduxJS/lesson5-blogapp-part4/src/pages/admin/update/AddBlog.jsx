import React from 'react'
import BlogForm from '../BlogForm'
import { useDispatch } from 'react-redux'
import {  addBlogToDatabase } from '../../../actions/blogAction';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <div>
        <h1 className='mt-5 text-center'>Add Blog</h1>
        <BlogForm onFormSubmit={fd=>{
            dispatch(addBlogToDatabase(fd));
            navigate('/dashboard');
        }}/>
    </div>
  )
}

export default AddBlog