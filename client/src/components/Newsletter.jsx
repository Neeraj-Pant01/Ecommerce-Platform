import React from 'react'
import { GiPaperPlane } from 'react-icons/gi'
import { styled } from 'styled-components'

const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
gap:20px;
`

const H1 = styled.h1`
font-size:60px;
`
const Title = styled.div`
font-size:24px;
opacity:0.6;
`
const Serachbox=styled.div`
display:flex;
align-items:center;
width:43%;
height:40px;
border:1px solid lightgrey;
`
const Button = styled.button`
flex:1.5;
background-color:teal;
height:100%;
border:none;
outline:none;
color:white;
font-size:36px;
`

const Input = styled.input`
flex:7;
height:100%;
border:none;
outline:none;
padding-left:20px;
`

const Newsletter = () => {
  return (
    <Container>
        <H1>NewsLetter</H1>
        <Title>Get timely updates from your favorate products</Title>
        <Serachbox>
            <Input placeholder='enter your email...' />
            <Button>
                <GiPaperPlane />
            </Button>
        </Serachbox>
    </Container>
  )
}

export default Newsletter
