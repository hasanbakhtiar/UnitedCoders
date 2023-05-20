import React from 'react'
import { Row } from 'react-bootstrap'
import SingleProductCard from '../components/SingleProductCard'
import { useSelector } from 'react-redux'

const ProductsPage = () => {
    const productdata:any = useSelector(state=>state);
  return (
    <>
        <h1 className='text-center my-5'>Asus Shop</h1>
        <Row className='g-5'>
            {productdata.map((item:any)=>(
                <SingleProductCard alldata={item} key={item.id}  title={item.title} price={item.price} photo={item.photo}/>
            ))}
        </Row>
    </>
  )
}

export default ProductsPage