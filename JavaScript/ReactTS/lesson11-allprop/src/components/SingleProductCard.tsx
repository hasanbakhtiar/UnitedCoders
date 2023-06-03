import { useContext, useState } from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useCart } from "react-use-cart";
import { LangContext } from "../lang/LangContext";
import { useDispatch, useSelector } from "react-redux";
import { addWish, removeWish } from "../manager/action/wishAction";

interface PropType {
  title: string;
  price: number;
  photo: string;
  alldata: any;
}
const SingleProductCard = ({ alldata }: PropType) => {
  const { addItem } = useCart();
  const [fill, setFill] = useState("regular");
  const [lang] = useContext(LangContext);
  const dispatch = useDispatch();
  const data: any = useSelector((state) => state);
  return (
    <Col sm={6} md={4}>
      <Card>
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
              if (fill === "regular") {
                dispatch(addWish(alldata));
                const localWish: any = JSON.stringify(data.wish);
                localStorage.setItem("wish", localWish);
                setFill("solid");
                localStorage.setItem('fill','solid');
                console.log(data.wish);

              } else {
                dispatch(removeWish(alldata));
                setFill("regular");
                localStorage.setItem('fill','regular');
                console.log(data.wish);
                
              }
            }}
          >
            <i className={`fa-${fill} fa-heart`}></i>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleProductCard;
