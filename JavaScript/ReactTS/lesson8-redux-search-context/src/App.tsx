import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import BlogDetails from './pages/BlogDetails'
import Dashboard from './pages/admin/Dashboard'
import AddBlog from './pages/admin/update/AddBlog'
import EditBlog from './pages/admin/update/EditBlog'
import Products from './pages/Products'
import { ProductProvider } from './context/ProductContext'

const App = () => {
  return (
    <BrowserRouter>
    <ProductProvider>
    <Header />
       <Container>
       <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/blog' element={<Blogs/>}></Route>
                <Route path='/products' element={<Products/>}></Route>
                <Route path='/blog/:id' element={<BlogDetails/>}></Route>
                <Route path='/dashboard' element={<Dashboard/>}></Route>
                <Route path='/dashboard/add' element={<AddBlog/>}></Route>
                <Route path='/dashboard/edit/:id' element={<EditBlog/>}></Route>
            </Routes>
       </Container>
       </ProductProvider>
    </BrowserRouter>
  )
}

export default App