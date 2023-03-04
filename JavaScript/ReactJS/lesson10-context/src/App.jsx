import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { ProductProvider } from './context/ProductContext'
import Home from './pages/Home'
import Products from './pages/Products'

const App = () => {
    return (
        <BrowserRouter>
            <ProductProvider>
                <Header />
                <Container>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/products' element={<Products />} />
                    </Routes>
                </Container>
            </ProductProvider>
        </BrowserRouter>
    )
}

export default App