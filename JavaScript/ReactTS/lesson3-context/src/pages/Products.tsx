import SingleCard from "../components/SingleCard";
import { Row } from "react-bootstrap";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { ThemeContext } from "../context/ThemeContext";

const Products = () => {
  const [products] = useContext(ProductContext);
  const [mode] = useContext(ThemeContext);
  return (
    <div className={mode}>
      <h1 className="text-center my-5">Product List</h1>
      <Row className="g-5">
        {products.map((item: any) => (
          <SingleCard
            key={item.id}
            title={item.title}
            desc={item.description}
            img={item.image}
            price={item.price}
          />
        ))}
      </Row>
    </div>
  );
};

export default Products;
