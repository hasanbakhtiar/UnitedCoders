

import React from 'react'
import  Form  from '../../components/Form'
import { useDispatch } from 'react-redux'
import { addproduct } from '../../manager/action/productAction';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <div>
        <h1 className='text-center'>Add Product</h1>
        <Form onFormSubmit={(item:any)=>{
            dispatch(addproduct(item))
            navigate('/admin')
        }}/>
    </div>
  )
}

export default AddProduct