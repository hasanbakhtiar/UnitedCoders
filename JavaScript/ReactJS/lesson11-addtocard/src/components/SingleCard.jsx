import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function SingleCard({ title, photo, desc, price, id, alldata }) {
  const { addItem } = useCart();
  const notify=() => toast.success('Product added!', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
  return (
    <Col sm={12} md={4}>
      <Card >
        <Card.Img height={400} variant="top" src={photo} />
        <Card.Body>
          <Card.Title>{title.substring(0, 30)}</Card.Title>
          <Card.Text>
            {desc.substring(0, 30)}
          </Card.Text>
          <Card.Text>
            {price} $
          </Card.Text>
          <Button variant="warning" onClick={() => {notify(addItem(alldata)) }}>Add to cart</Button>
         
          <Button variant="primary" className='ms-2'>Read More</Button>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleCard;