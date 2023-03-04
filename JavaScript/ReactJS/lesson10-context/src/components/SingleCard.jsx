import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SingleCard({title,photo}) {
  return (
   <Col sm={12} md={4}>
    <Card >
      <Card.Img variant="top" src={photo} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
   </Col>
  );
}

export default SingleCard;