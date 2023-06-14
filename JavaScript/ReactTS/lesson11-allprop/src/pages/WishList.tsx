
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeWish } from "../manager/action/wishAction";
import { useCart } from "react-use-cart";
import { useEffect } from "react";
import Aos from "aos";

const WishList = () => {
  const data: any = useSelector((a) => a);
  const dispatch = useDispatch();
  const { addItem } = useCart();
  useEffect(()=>{
    Aos.init();
    
  },[])
  const c:any = localStorage.getItem('wish');
  const a:any  = JSON.parse(c)
  return (
    <Row>
      {a === null ? (
        <img
          className="text-center"
          src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png"
          alt="err"
        />
      ) : (
        a.map((item: any) => {
          return (
            <Col sm={12} md={4} data-aos="flip-left">
            <div className="card">
              <img src={item.photo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button onClick={()=>{addItem(item);
                alert('product add to cart')}} className="btn btn-primary me-3">
                  Add to cart
                </button>
                <button onClick={()=>{
                  
           
                  dispatch(removeWish({id:item.id}))}} className="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
            </Col>
          );
        })
      )}
    </Row>
  );
};

export default WishList;
