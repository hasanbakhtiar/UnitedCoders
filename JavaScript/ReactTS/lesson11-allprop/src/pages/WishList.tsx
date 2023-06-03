import React from 'react'
import SingleProductCard from '../components/SingleProductCard';
import { Row } from 'react-bootstrap';

const WishList = () => {
  const fetchLocal:any = localStorage.getItem('wish');
  const useLocal:any = JSON.parse(fetchLocal);

  return (
    <Row>
      {useLocal.map((item:any)=>{
        return <SingleProductCard 
        key={item.id} 
        alldata={item} 
        title={item.title} 
        price={item.price} 
        photo={item.photo}/>
      })}
    </Row>
  )
}

export default WishList