import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { LoginFail, LoginStart, LoginSucess } from "../redux/actions/action"
import { Link, useNavigate } from "react-router-dom"
import "./styles.css"

const Container = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
gap:30px;
`

const Wrapper = styled.div`
display:flex;
flex-direction:column;
gap:10px;
// border:2px solid green;
`
const Form = styled.form`
display:grid;
grid-template-columns:repeat(1,1fr);
gap:40px;
`

const Field = styled.input`
padding:15px 20px;
background-color:#eeeeff;
outline:none;
border:none;
border-radius:10px;
width:300px;
`

const Button = styled.button`
width:200px;
padding:10px 0px;
border-radius:10px;
background:	rgb(255,255,224);
border:none;
cursor:pointer;
align-self:center;
font-size:18px;
margin-left:40%;
`


const Login = () => {

    const [loginInfo, setLoginInfo] = useState({
        email:"",
        password:"",
    })

    const [err, setErr] = useState(true)

useEffect(()=>{
    const timeOut = setTimeout(() => {
        setErr(false)
    }, 5000);
},[])

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleChange = (e) =>{
        const {value, name} = e.target;

        setLoginInfo((pre)=>{
            return {...pre,[name]:value}
        })
    }
    
    const handleLogin = async (e) =>{
        e.preventDefault();

        try{
            dispatch(LoginStart())
            const response = await axios.post(`${import.meta.env.VITE_REACT_APP_URI}auth/login`,loginInfo)
            dispatch(LoginSucess(response.data))
            navigate('/')
        }catch(err){
            dispatch(LoginFail())
            console.log(err)
        }
    }

  return (
    <>
        {err && <p style={{color:"red", fontSize:"20px"}}>You need to Login First In order to add products to the cart</p>}
    <Container className="go">
    <h1 style={{marginBottom:"50px"}}>ShopMingle</h1>
        <Wrapper>
            <Form>
                <Field name="email" placeholder="enter email .." onChange={handleChange}></Field>
                <Field name="password" placeholder="enter password .." onChange={handleChange}></Field>
                <Button onClick={handleLogin}>Login</Button>
            </Form>
        </Wrapper>
        <Link to='/' style={{textDecoration:"underline",color:"black",fontWeight:"600",marginRight:"150px"}}>Continue without Login ?</Link>
    </Container>
    </>
  )
}

export default Login
