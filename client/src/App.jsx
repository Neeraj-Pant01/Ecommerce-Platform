import React from 'react'
import Homepage from './pages/Homepage'
import AllProducts from './pages/AllProducts'
import SingleProduct from './pages/SingleProduct'
import Cart from './pages/Cart'
import { Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/products/:category' element={<AllProducts />} />
      <Route path='/product/:id' element={ <SingleProduct />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </>
  )
}

export default App
