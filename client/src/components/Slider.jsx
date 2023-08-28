import styled from "styled-components"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import { sliderdata } from "../data"
import { useState } from "react"

const Container = styled.div`
display:flex;
width:100%;
height:100vh;
position:relative;
overflow-x: hidden;
`;
const Slide = styled.div`
display:flex;
height:100vh;
width:100vw;
background-color: #${(props)=>props.bg};
`;
const Arrow = styled.div`
display:flex;
align-items:center;
justify-content:center;
background-color:#fff7f7;
height:50px;
width:50px;
border-radius:50%;
position:absolute;
top:0;
bottom:0;
left:${(props)=>props.direction === "left" && "10px" };
right:${(props)=>props.direction === "right" && "10px"};
cursor:pointer;
margin:auto;
z-index:3;
`;
const Imagecontainer = styled.div`
flex:1;
height:100%;
`;
const Image = styled.img`
height:80%;
`;
const InfoContainer = styled.div`
flex:1;
display : flex;
padding:50px;
flex-direction:column;
justify-content:center;
`;
const Title = styled.h1`
font-size:70px;
text-transform:uppercase;
`;
const Desc = styled.div`
margin:50px 0px;
font-weight:500;
font-size:20px;
letter-spacing:3px;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props)=>props.current * -100}vw);
`;

const Button = styled.button`
padding: 15px;
border: 1.5px solid grey;
background-color:transparent;
outline:none;
cursor:pointer;
width:170px;
`

const Slider = () => {
    const [current, setCurrent] = useState(0)

    const handleClick = (direction) =>{
        if(direction === "left"){
            setCurrent(current > 0 ? current-1 : sliderdata.length - 1)
        }else{
            setCurrent(current < sliderdata.length-1 ? current+1 : 0)
        }
    }

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}><AiOutlineArrowLeft /></Arrow>
        <Wrapper current = {current}>
        {
            sliderdata.map((item,i)=>{
                return (
                    <Slide key={i} bg={item.bg}>
                        <Imagecontainer>
                            <Image src={item.image} alt="" />
                        </Imagecontainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                )
            })
        }
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}><AiOutlineArrowRight /></Arrow>
    </Container>
  )
}

export default Slider
