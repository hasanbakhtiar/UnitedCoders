import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import { Container } from "react-bootstrap";
import ProductsPage from "../pages/ProductsPage";
import { CartProvider } from "react-use-cart";
import Cart from "../pages/Cart";
import Dashboard from "../pages/admin/Dashboard";
import { LangProvider } from "../lang/LangContext";
import AddProduct from "../pages/admin/AddProduct";
import { useId } from "react";

const App = () => {
  return (
    <BrowserRouter>
    <LangProvider>
    <CartProvider>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<ProductsPage />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/admin" element={<Dashboard />}></Route>
          <Route path="/admin/add" element={<AddProduct />}></Route>
        </Routes>
      </Container>
      </CartProvider>
      </LangProvider>
    </BrowserRouter>
  );
};

export default App;
