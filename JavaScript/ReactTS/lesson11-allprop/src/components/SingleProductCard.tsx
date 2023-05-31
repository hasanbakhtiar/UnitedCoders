import { useContext } from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useCart } from "react-use-cart";
import { LangContext } from "../lang/LangContext";

interface PropType {
  title: string;
  price: number;
  photo: string;
  alldata: any;
}
const SingleProductCard = ({  alldata }: PropType) => {
  const { addItem } = useCart();
  const [lang] = useContext(LangContext);
  return (
    <Col sm={6} md={4}>
      <Card>
        <Card.Img variant="top" height={300} src={alldata.photo} alt={alldata.titleen} />
        <Card.Body>
          <Card.Title>{lang === 'en'? alldata.titleen:alldata.titleaz}</Card.Title>
          <Card.Text>{alldata.price} $</Card.Text>
          <Button
            onClick={() => {
              addItem(alldata);
              alert("product add to cart");
            }}
            variant="primary" className={alldata.stock?"":"disabled"}
          >
            Add to card
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleProductCard;
