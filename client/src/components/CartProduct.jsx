import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'
import { styled } from 'styled-components'

// const ProductWarpper = styled.div``

const Product = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px 50px 20px 50px;
`
const ProductDetails = styled.div`
display:flex;
align-items:center;
gap:30px;
font-size:18px;
`

const Image = styled.img`
width:250px;
`

const Detail = styled.div`
display:flex;
flex-direction:column;
gap:20px;
`
const ProductDetail = styled.div`
display:flex;
align-items:center;
gap:10px;
`
const B = styled.b`
`
const Span = styled.span`
color:#616161;
font-size:${(props) => props.total && "26px"};
color:${(props) => props.total && "black"}
`
const ProductId = styled.div`
color:#616161;
`
const Color = styled.div`
width:25px;
height:25px;
border-radius:50%;
background-color:${(theme) => theme.color}
`
const Pricedetail = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
gap:30px;
// border:2px solid yellow;
margin-right:50px;
`
const Quantity = styled.div`
display:flex;
align-items:center;
gap:5px;
font-size:18px;
`
const ProductQuantity = styled.span`
`
const Price = styled.div`
font-size:26px;
color:#616161;
`

const Hr = styled.hr`
border:1px solid lightgrey;
width:98%;
margin-left:1%;
`

const CartProduct = ({p,total}) => {

    const [CartProduct, setcartProduct] = useState()

    useEffect(()=>{
        const getCartProducts = async () =>{
            try{
                const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URI}products/${p?.productId}`)
                setcartProduct(response.data)
            }catch(err){
                console.log(err)
            }
        }
        getCartProducts()
    },[p?.productId])

    // console.log(p)
    return (
        <>
            <Product>
                <ProductDetails>
                    <Image src={CartProduct?.image} alt=" " />
                    <Detail>
                        <ProductDetail>
                            <B>Product</B>
                            <Span>{CartProduct?.title}</Span>
                        </ProductDetail>
                        <ProductDetail>
                            <B>Id</B>
                            <ProductId>{CartProduct?._id}</ProductId>
                        </ProductDetail>
                        <Color color={`${p.color}`}></Color>
                        <ProductDetail>
                            <B>Size</B>
                            <Span>{p.size}</Span>
                        </ProductDetail>
                    </Detail>
                </ProductDetails>
                <Pricedetail>
                    <Quantity>
                        <IoMdAdd />
                        <ProductQuantity>{p.quantity}</ProductQuantity>
                        <IoMdRemove />
                    </Quantity>
                    <Price>
                        {p.quantity * CartProduct?.price}
                    </Price>
                </Pricedetail>
            </Product>
            <Hr />
        </>
    )
}

export default CartProduct
