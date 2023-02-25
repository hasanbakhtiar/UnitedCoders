import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NotFoundPage from '../pages/NotFoundPage'
class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
            <Header/>
              <div className="container">
              <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                    <Route path='*' element={<NotFoundPage />}></Route>
                </Routes>
              </div>
              <Footer />
            </BrowserRouter>
        )
    }
}

export default AppRouter