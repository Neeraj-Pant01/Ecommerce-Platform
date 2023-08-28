import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import { styled } from 'styled-components'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'
import { useSelector } from 'react-redux'
import CartProduct from '../components/CartProduct'
import axios from 'axios'

const Container = styled.div`
`
const Wrapper = styled.div`
`
const Title = styled.h1`
`
const Top = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:50px;
`
const Topbutton = styled.button`
color:${(props)=>props.fill ? "white" : "black"};
background-color:${(props)=>props.fill ? "black" : "white"};
outline:none;
padding:10px;
cursor:pointer;
width:${(theme)=>!theme.width && "max-content"};
`
const TopTexts = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
gap:20px;
`
const Toptext = styled.span`
text-decoration:underline;
cursor:pointer;

`
const Bottom = styled.div`
display:flex;`

const Info = styled.div`
flex:3;
// border:2px solid yellow;
`
const Span = styled.span`
color:#616161;
font-size:${(props)=>props.total && "26px"};
color:${(props)=>props.total && "black"}
`
const Summary = styled.div`
flex:1;
border:1px solid lightgrey;
padding:50px 50px 0px 50px;
height:50vh;
border-radius:10px;
display:flex;
flex-direction:column;
gap:30px;
`
const OrderSummary = styled.p`
font-size:36px;
color:#616161;
`
const OrderDetails = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`
const OrderDetail = styled.span `

`
const OrderPrice = styled.span`
`

const Cart = () => {

    const cart = useSelector((cart)=>cart.cartReducer?.payload.products)
    const totalProd = useSelector((cart)=>cart.cartReducer?.payload.products)

    console.log(totalProd)
    
    const [totalPrice, setTotalPrice] = useState([]);

    useEffect(() => {
        const calculateTotalPrice = async () => {
          try {
            const pricePromises = totalProd.map(async (p) => {
              const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URI}products/${p.productId}`);
              return response.data.price * p.quantity;
            });
      
            const totalPriceArray = await Promise.all(pricePromises);
      
            // Calculate the sum of totalPriceArray
            const total = totalPriceArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      
            setTotalPrice(total);
          } catch (err) {
            console.log(err);
          }
        };
      
        calculateTotalPrice();
      }, []);

  return (
    <Container>
        <Navbar />
        <Announcements />
        <Wrapper>
        <Title>YOUR BAG</Title>
            <Top>
                <Topbutton>CONTINUE SHOPPING</Topbutton>
                <TopTexts>
                    <Toptext>Shopping Bag(2)</Toptext>
                    <Toptext>Your Wishlist(0)</Toptext>
                </TopTexts>
                <Topbutton fill='true'>CHECKOUT NOW</Topbutton>
            </Top>
            <Bottom>
                <Info>
                    {
                        cart.map((p)=>{
                            return (
                                <CartProduct key={p._id} p={p}/>
                            )
                        })
                    }

                </Info>
                <Summary>
                    <OrderSummary>ORDER SUMMARY</OrderSummary>
                    <OrderDetails>
                        <OrderDetail>Subtotal</OrderDetail>
                        <OrderPrice>{totalPrice}</OrderPrice>
                    </OrderDetails>
                    <OrderDetails>
                        <OrderDetail>Estimated-shipping</OrderDetail>
                        <OrderPrice>200</OrderPrice>
                    </OrderDetails>
                    <OrderDetails>
                        <OrderDetail>Shipping Discount</OrderDetail>
                        <OrderPrice>-200</OrderPrice>
                    </OrderDetails>
                    <OrderDetails>
                            <Span total='true'>Total</Span>
                            <Span total='true'>{totalPrice}</Span>
                    </OrderDetails>
                <Topbutton width='false'>CHECKOUT NOW</Topbutton>
                </Summary>
            </Bottom>
        </Wrapper>
    </Container>
  )
}

export default Cart
