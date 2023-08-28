import styled from 'styled-components';
import {GrCart} from "react-icons/gr"
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Nav = styled.div`
height:60px;
display:flex;
align-items:center;
justify-content:center;
`
const Navleft = styled.div`
flex:1;
display:flex;
align-items:center;
padding:0px 20px;
gap:10px;
`
const Lan = styled.span`
color:grey;
font-weight:400;
`
const Searchbar = styled.input`
border:1px solid grey;
outline:none;
padding:5px 20px;
`

const Navmid = styled.div`
flex:1;
text-align:center;
`
const Heading = styled.h1`
text-align:center;
`

const Navright = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
gap:10px;
`
const MenuItem = styled.div`
display:flex;
align-items:center;
justify-content:center;
font-size:18px;
color:grey;
cursor:pointer;
`
const Badge = styled.div`
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
background-color:blue;
color:white;
width:18px;
height:18px;
font-size:12px;
position:absolute;
top:-8px;
left:9px;
`

const Navbar = ({setSearch}) => {
  const currentCart = useSelector((cart) => cart.cartReducer.payload)
  const user = useSelector((user)=>user.LoginReducer.currentUser)
  const navigate = useNavigate()

  const handleLogOut = () =>{
    localStorage.clear()
    navigate('/login')
    window.location.reload()
  }
  return (
    <Nav>
      <Navleft>
        <Lan>EN</Lan>
        <Searchbar onChange={(e)=>setSearch(e.target.value)}/>
      </Navleft>
      <Navmid>
        <Link to={'/'}><Heading>SHOPMINGLE.</Heading></Link>
      </Navmid>
      <Navright>
        <Link to={`/register`}><MenuItem>REGISTER</MenuItem></Link>
       {user ? <MenuItem onClick={handleLogOut}>LogOut</MenuItem> : <Link to={`/register`}><MenuItem>SIGN IN</MenuItem></Link>}
        <Link to={user ? `/cart` : '/login'}><MenuItem style={{position:"relative"}}><GrCart style={{marginRight:"40px"}}/><Badge>{currentCart?.products.length > 0 ? currentCart?.products.length : 0}</Badge></MenuItem></Link>
      </Navright>
    </Nav>
  )
}

export default Navbar
