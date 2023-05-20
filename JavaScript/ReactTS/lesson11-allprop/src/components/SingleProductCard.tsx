import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useCart } from "react-use-cart";

interface PropType {
  title: string;
  price: number;
  photo: string;
  alldata:any
}
const SingleProductCard = ({ title, price, photo,alldata }: PropType) => {
    const {addItem} = useCart();
  return (
    <Col sm={6} md={4}>
      <Card>
        <Card.Img variant="top" height={300} src={photo} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{price} $</Card.Text>
          <Button onClick={()=>{
            addItem(alldata)
          }} variant="primary">Add to card</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleProductCard;
