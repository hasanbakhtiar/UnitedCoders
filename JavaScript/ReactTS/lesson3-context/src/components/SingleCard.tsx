import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { productType } from '../config'



const SingleCard:React.FC<productType> = ({title,desc,price,img}) => {
  return (
   <Col sm={6} md={4}>
    <Card >
    <Card.Img variant="top" src={img} height={300} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {desc.substring(0,30)}...
      </Card.Text>
      <Card.Text>
        {price} $
      </Card.Text>
      <Card.Text>
        
      </Card.Text>
      <Button  variant="primary">Add to card</Button>
    </Card.Body>
  </Card>
   </Col>
  )
}

export default SingleCard