import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useCart } from "react-use-cart";

function Cart() {
  const { isEmpty,  items, updateItemQuantity, removeItem,cartTotal } =
    useCart();

  return isEmpty ? (
      <div className="d-flex align-items-center justify-content-center">
          <img src="https://cdn.dribbble.com/users/461802/screenshots/4421003/emptycart.gif" alt="" />
      </div>
  ) : (
    <>
      <h1 className="my-5 text-center">Cart</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Photo</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item:any, count:number) => (
            <tr>
              <td>{count + 1}</td>
              <td>
                <img width={50} src={item.photo} alt={item.title} />
              </td>
              <td>{item.title}</td>
              <td>{item.price * item.quantity}$</td>
              <td>
                <Button
                  onClick={() => {
                    updateItemQuantity(item.id, item.quantity - 1);
                  }}
                >
                  -
                </Button>
                <span className="mx-3">{item.quantity}</span>
                <Button onClick={()=>{updateItemQuantity(item.id, item.quantity+1)}}>+</Button>
              </td>
              <td>
                <Button variant="danger" onClick={()=>{removeItem(item.id)}}>Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
        <h4 className="my-5">Total Price: {cartTotal.toFixed()}$</h4>
    </>
  );
}

export default Cart;