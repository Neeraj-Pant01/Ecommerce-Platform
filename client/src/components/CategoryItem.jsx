import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const Container = styled.div`
flex:1;
position:relative;
height:70vh;
margin:3px;
`
const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
`

const Info = styled.div`
position:absolute;
top:0;
bottom:0;
margin:auto;
display:flex;
flex-direction:column;
width:100%;
height:100%;
justify-content:center;
text-align:center;
align-items:center;
gap:30px;
`

const Title = styled.h1`
color:white;
font-weight:600;
`

const Button = styled.button`
background-color:white;
border:none;
outline:none;
padding:10px;
color:grey;
width:max-content;
cursor:pointer;
`

const CategoryItem = ({c}) => {
  return (
    <Container>
    <Link to={`/products/${c.category}`}>
        <Image src={c.img} alt=''/>
        <Info>
            <Title>{c.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Link>
    </Container>
  )
}

export default CategoryItem
