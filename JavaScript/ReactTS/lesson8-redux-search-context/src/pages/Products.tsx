import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

const Products = () => {
    const [productData] = useContext(ProductContext);
  return (
    <div>
       <h1>test</h1>
       {productData.map((i:any)=>(
            <p>{i.title}</p>
        ))}
    </div>
  )
}

export default Products