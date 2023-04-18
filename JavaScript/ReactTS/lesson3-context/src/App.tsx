import React, { useContext } from "react";
import Products from "./pages/Products";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import { ProductProvider } from "./context/ProductContext";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";

const Main = () => {
  const [mode] = useContext(ThemeContext);

  return (
    <div className={mode} id="data">
      <ProductProvider>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<Products />}></Route>
          </Routes>
        </Container>
      </ProductProvider>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
