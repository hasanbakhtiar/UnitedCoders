import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { productType } from '../config'



const SingleCard:React.FC<productType> = ({title,color,price,img,stock}) => {
  return (
   <Col sm={6} md={4}>
    <Card >
    <Card.Img variant="top" src={img} height={300} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {color}
      </Card.Text>
      <Card.Text>
        {price} $
      </Card.Text>
      <Card.Text>
        {stock ? 'In Stock':"Stock out"}
      </Card.Text>
      <Button className={stock? "":" disabled"} variant="primary">Add to card</Button>
    </Card.Body>
  </Card>
   </Col>
  )
}

export default SingleCard