import { useContext, useEffect } from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useCart } from "react-use-cart";
import { LangContext } from "../lang/LangContext";
import { useDispatch } from "react-redux";
import { addWish } from "../manager/action/wishAction";
import AOS from 'aos';
interface PropType {
  title: string;
  price: number;
  photo: string;
  alldata: any;
}
const SingleProductCard = ({ alldata }: PropType) => {
  useEffect(()=>{
    AOS.init();
  },[])
  const { addItem } = useCart();
  const [lang] = useContext(LangContext);
  const dispatch = useDispatch();
  return (
    <Col sm={6} md={4}>
      <Card data-aos="flip-left">
        <Card.Img
          variant="top"
          height={300}
          src={alldata.photo}
          alt={alldata.titleen}
        />
        <Card.Body>
          <Card.Title>
            {lang === "en" ? alldata.titleen : alldata.titleaz}
          </Card.Title>
          <Card.Text>{alldata.price} $</Card.Text>
          <Button
            onClick={() => {
              addItem(alldata);
              alert("product add to cart");
            }}
            variant="primary"
            className={alldata.stock ? "" : "disabled"}
          >
            Add to card
          </Button>
          <Button
            className="mx-3"
            variant="warning"
            onClick={() => {
        
              dispatch(addWish(alldata));
              alert("product add to wishlist");
            }}
          >
            <i className="fa-regular fa-heart"></i>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleProductCard;
