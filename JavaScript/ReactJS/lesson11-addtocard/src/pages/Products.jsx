import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import SingleCard from "../components/SingleCard";
import { ProductContext } from "../context/ProductContext";

const Products = () => {
  const [products] = useContext(ProductContext);

  return (
    <>
      <h1 className="text-center my-5">Shop Page</h1>
      <Row className="g-5">
        {products.map((item) => {
          return (
            <SingleCard
              title={item.title}
              desc={item.description}
              price={item.price}
              id={item.id}
              key={item.id}
              alldata={item}
              photo={item.image}
            />
          );
        })}
      </Row>
    </>
  );
};

export default Products;
