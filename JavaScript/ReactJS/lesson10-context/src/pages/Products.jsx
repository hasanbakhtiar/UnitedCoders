import React, { useContext } from 'react'
import { Row } from 'react-bootstrap'
import SingleCard from '../components/SingleCard'
import { ProductContext } from '../context/ProductContext'

const Products = () => {
  const [products] = useContext(ProductContext)
  
  return (
    <>
    <h1 className='my-5 text-center'>Product List</h1>
      <Row> 
        {products.map(item=>{
          return  <SingleCard photo={item.image} title={item.title}/>
        })}
       
      </Row>


    </>
  )
}

export default Products