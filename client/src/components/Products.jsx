import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./product"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const Container = styled.div`
display:flex;
padding:20px;
justify-content:space-between;
flex-wrap:wrap;
`

const Products = ({products,color,search}) => {
  const [categoryProduct, setCategoryProduct] = useState([])
  const {category} = useParams();

  // console.log(`${import.meta.env.VITE_REACT_APP_URI}products/all/products?category=${category}&color=${color ? color :""}`)


  useEffect(()=>{
  const getAllCatProducts = async () =>{
    try{
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URI}products/all/products?${!search && `category=${category}`}&color=${color ? color :""}&search=${search}`)
      setCategoryProduct(response.data)
    }catch(err){
      console.log(err)
    }
  }
  getAllCatProducts()
},[category,color,search])
  return (
    <Container>
        {
           category ? categoryProduct.map((c)=><Product p={c} key={c?._id} />) : products?.slice(0,8).map((p,i)=><Product p={p} key={i}/>)
        }
        {
          !categoryProduct && (!products && <p style={{color:"red",textAlign:"center",width:"100%",padding:"50px 0px"}}>NO items found !</p>)
        }
    </Container>
  )
}

export default Products
