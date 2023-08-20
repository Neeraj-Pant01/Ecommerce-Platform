import styled from "styled-components"
import {GiShoppingCart} from "react-icons/gi"
import {AiOutlineSearch} from "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai"
import { Link } from "react-router-dom"


const Info = styled.div`
opacity:0;
height:100%;
width:100%;
position:absolute;
display:flex;
align-items:center;
justify-content:center;
background-color: rgba(0, 0, 0, 0.2);
z-index:3;
top:0;
bottom:0;
`

const Container = styled.div`
flex:1;
height:350px;
margin:5px;
min-width:300px;
position:relative;
display:flex;
align-items:center;
justify-content:center;
background-color: #f5fbfd;

&:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
position:absolute;
top:0;
bottom:0;
margin:auto;
width:220px;
height:220px;
border-radius:50%;
background-color:white;
`
const Image = styled.img`
height:75%;
z-index:2;
`
const Icon = styled.div`
width:40px;
height:40px;
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
background-color:white;
margin:10px;
transition:all 0.5s ease;
cursor:pointer;

&:hover{
    background-color:lightgrey;
    transform:scale(1.2)
}
`

const product = ({p}) => {
  return (
    <Container>
        <Circle />
        <Image src={p.image}/>
        <Info>
            <Icon>
                <GiShoppingCart/>
            </Icon>
            <Icon>
                <Link to={`/product/${p._id}`}><AiOutlineSearch /></Link>
            </Icon>
            <Icon>
                <AiOutlineHeart />
            </Icon>
        </Info>
    </Container>
  )
}

export default product
