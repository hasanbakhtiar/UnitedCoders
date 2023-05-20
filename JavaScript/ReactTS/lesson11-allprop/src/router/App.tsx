import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import { Container } from "react-bootstrap";
import ProductsPage from "../pages/ProductsPage";
import { CartProvider } from "react-use-cart";

const App = () => {
  return (
    <BrowserRouter>
    <CartProvider>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<ProductsPage />}></Route>
        </Routes>
      </Container>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
