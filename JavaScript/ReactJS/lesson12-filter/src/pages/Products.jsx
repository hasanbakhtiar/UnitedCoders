import React, { useContext, useState } from "react";
import { Button, Row } from "react-bootstrap";
import SingleCard from "../components/SingleCard";
import { ProductContext } from "../context/ProductContext";

const Products = () => {
  const [products] = useContext(ProductContext);
  const [data,setData] = useState(products);
  
  const filterResult =(catItem)=>{
    const result = products.filter(fdata=>(
       fdata.category === catItem
    ))
    setData(result);
  }
  return (
    <>
    <div className="d-flex align-items-center justify-content-center flex-column">
      {console.log(products)}
      <h1 className="text-center my-5">Shop Page</h1>
      <div className="d-flex justify-content-between mb-5" style={{width:"20%"}}>
        <Button onClick={()=>{filterResult('men\'s clothing')}} className="btn btn-info">Men</Button>
        <Button onClick={()=>{filterResult('women\'s clothing')}} className="btn btn-info">Women</Button>
        <Button onClick={()=>{filterResult('jewelery')}} className="btn btn-info">Jewelery</Button>
      </div>
      <Row className="g-5">
        {data.length===0?products.map((item) => {
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
        }):data.map((item) => {
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

export default Products;
