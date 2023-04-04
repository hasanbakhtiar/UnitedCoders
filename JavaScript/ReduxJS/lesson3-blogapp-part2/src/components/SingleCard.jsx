import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const SingleCard = ({photo,title,desc,id}) => {
  return (
   <Col sm={12} md={4}>
    <Card >
      <Card.Img variant="top" src={photo} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <LinkContainer to={`/blog/${id}`}>
        <Button variant="primary">Read More</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
   </Col>
  )
}

export default SingleCard