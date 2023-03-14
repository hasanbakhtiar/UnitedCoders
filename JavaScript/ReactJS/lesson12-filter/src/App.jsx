import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import { Container } from 'react-bootstrap'
import { ProductProvider } from './context/ProductContext'
import { CartProvider } from 'react-use-cart'
import Search from './pages/Search'

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <ProductProvider>
          <Header />
          <Container>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/products' element={<Products />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
              <Route path='/search' element={<Search />}></Route>
            </Routes>
          </Container>
        </ProductProvider>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App