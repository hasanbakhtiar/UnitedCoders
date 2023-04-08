import React from 'react'
import BlogForm from '../BlogForm'
import { useDispatch } from 'react-redux'
import { addBlog } from '../../../actions/blogAction';

const AddBlog = () => {
    const dispatch = useDispatch();
  return (
    <div>
        <h1 className='mt-5 text-center'>Add Blog</h1>
        <BlogForm onFormSubmit={fd=>{
            dispatch(addBlog(fd));
        }}/>
    </div>
  )
}

export default AddBlog