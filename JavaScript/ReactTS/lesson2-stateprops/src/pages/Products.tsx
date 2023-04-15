import React, { useEffect, useState } from 'react'
import SingleCard from '../components/SingleCard'
// import products from '../data/products'
import { Row } from 'react-bootstrap'
import { productType } from '../config'
import axios from 'axios'

const Products = () => {
  const [data,setData] = useState<productType[]>([]);

 useEffect(() => {
  axios.get('https://mocki.io/v1/b805e833-d4fd-4e8c-ad31-e0fa21295ae2')
  .then((res:any)=>(setData(res.data)))
  }, [])
  
  
  
  return (
    <div>
      <h1 className='text-center my-5'>Product List</h1>
        <Row className='g-5'>
        {data.map((item:any,i:number)=>(
        <SingleCard 
        key={i}
        title={item.title}
        color={item.color}
        price={item.price}
        img={item.img}
        stock={item.stock}
        />
      ))}
        </Row>
    </div>
  )
}

export default Products



{/* <Row className='g-5'>
{products.map((item:any)=>(
<SingleCard 
title={item.title}
color={item.color}
price={item.price}
img={item.img}
stock={item.stock}
/>
))}
</Row> */}