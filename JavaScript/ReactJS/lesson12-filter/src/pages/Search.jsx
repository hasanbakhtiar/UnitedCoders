import React, { useContext, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import SingleCard from "../components/SingleCard";
import { ProductContext } from "../context/ProductContext";

const Search = () => {
  const [products] = useContext(ProductContext);
  const [query,setQuery] = useState();
  const [searchvalue,setSearchvalue] = useState();
  
  const searchSubmit =(e)=>{
    e.preventDefault();
      setSearchvalue(query);
  }
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-center my-5">Search products...</h1>
      <Col className="mb-5">
        <form onSubmit={searchSubmit}>
        <input type="text" onChange={e=>setQuery(e.target.value)}/><Button type="submit" className="btn-sm" variant="success">Search</Button>
        </form>
      </Col>
      <Row className="g-5">
        {products.filter(value=>value.title.toLocaleLowerCase().includes(searchvalue)).map((item) => {
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
      </div>
    </>
  );
};

export default Search;
