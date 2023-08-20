import React, { useEffect, useState } from 'react'
import Announcements from '../components/Announcements'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import axios from "axios"

const Homepage = () => {
  const [products, setProducts] = useState([])
  const uri = import.meta.env.VITE_REACT_APP_URI;

  useEffect(()=>{
    const getAllProducts = async () =>{
      try{
        const response = await axios.get(`${uri}products/all/products`);
        setProducts(response.data)
      }catch(err){
        console.log(err)
      }
    }
    getAllProducts()
  },[])

  return (
    <>
    <Announcements />
    <Navbar />
    <Slider />
    <Categories />
    <Products products={products}/>
    <Newsletter />
    <Footer />
    </>
  )
}

export default Homepage
