import React from 'react'
import { styled } from 'styled-components'
import { AiFillInstagram, AiFillPhone, AiOutlineFacebook, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai"
import { BsPinterest } from "react-icons/bs"
import {MdLocationOn} from "react-icons/md"

const Container = styled.div`
display:flex;
padding:50px;
align-items:center;
justify-content:space-between;
gap:40px;
`
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
gap:20px;
padding-left:20px;
`
const Title = styled.h1`

`
const Desc = styled.div`
color:black;
color:#505050
`
const SocialContainer = styled.div`
display:flex;
gap:20px;
`
const SocialIcon = styled.div`
display:flex;
align-items:center;
justify-content:center;
background-color:${(props)=>props.bg};
width:40px;
height:40px;
border-radius:50%;
color:white;
font-size:24px;
padding:4px;
`

const Mid = styled.div`
flex:1;
`
const Right = styled.div`
flex:1;
display:flex;
flex-direction:column;
gap:20px;
`
const Titlelink = styled.div`
font-size:24px;
font-weight:600;
margin-bottom:20px;
`
const List = styled.ul`
display:flex;
flex-wrap:wrap;
list-style:none;
justify-content:space-between;
`
const ListItem = styled.li`
width:50%;
margin-bottom:15px;
`
const Contact = styled.h2`
margin-bottom:20px;
`
const ContactItem = styled.div`
display:flex;
align-items:center;
gap:20px;
// border:2px solid red;
`
const ContactIcon = styled.span`
font-size:24px;
font-weight:600;
display:flex;
align-items:center;
`
const ContactInfo = styled.span`
`
const Payment = styled.img`
width:50%;
margin-top:10px;
`
const Footer = () => {
  return (
    <Container>
      <Left>
        <Title>PRIMECARE</Title>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusantium vero officiis qui delectus! Aliquid quibusdam vitae sint. Quos expedita aliquam nulla, aspernatur possimus ex nemo rerum dicta consectetur minus animi modi, dignissimos illum?</Desc>
        <SocialContainer>
          <SocialIcon bg="blue"> <AiOutlineFacebook /> </SocialIcon>
          <SocialIcon bg="pink"> <AiFillInstagram /> </SocialIcon>
          <SocialIcon bg="lightblue"> <AiOutlineTwitter /> </SocialIcon>
          <SocialIcon bg='red'> <BsPinterest /> </SocialIcon>
        </SocialContainer>
      </Left>
      <Mid>
        <Titlelink>Useful Links</Titlelink>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Traking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>About Us</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Mid>
      <Right>
        <Contact>Contact</Contact>
        <ContactItem>
          <ContactIcon><MdLocationOn /> </ContactIcon>
          <ContactInfo>622 kanhapur Haridwar Road Roorkee</ContactInfo>
        </ContactItem>
        <ContactItem>
          <ContactIcon><AiFillPhone /></ContactIcon>
          <ContactInfo>+12345678</ContactInfo>
        </ContactItem>
        <ContactItem>
          <ContactIcon><AiOutlineMail /></ContactIcon>
          <ContactInfo>contact@gmail.com</ContactInfo>
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"  alt="" />
      </Right>
    </Container>
  )
}

export default Footer
