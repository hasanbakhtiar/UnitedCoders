import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ForgotPassword from './examples/ForgotPassword'
import CharacterDetails from './pages/CharacterDetails'
import Home from './pages/Home'


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/:url' element={<CharacterDetails />}></Route>
            <Route path='/forgotpass' element={<ForgotPassword />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App