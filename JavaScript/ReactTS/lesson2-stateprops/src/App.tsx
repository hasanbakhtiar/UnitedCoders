import React from "react";
import Products from "./pages/Products";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
