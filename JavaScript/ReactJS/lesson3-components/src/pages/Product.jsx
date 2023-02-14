import React, { Component } from 'react'
import SingleCard from '../components/SingleCard'
import cardata from '../data/car'

class Product extends Component {
  render() {
    return (
    <>
    <h1 className='text-center my-5'>Products</h1>
    <div className='row'>
        {cardata.map(item=>{
            return <SingleCard key={item.id} brand={item.brand} photo={item.photo}/>
        })}
      </div>
    
    </>
    )
  }
}

export default Product