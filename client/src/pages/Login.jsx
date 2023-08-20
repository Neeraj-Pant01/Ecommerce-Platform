import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { LoginFail, LoginStart, LoginSucess } from "../redux/actions/action"
import { useNavigate } from "react-router-dom"

const Container = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
justify-content:center;
`
const Wrapper = styled.div`
`
const Form = styled.form`
display:grid;
grid-template-columns:repeat(2,1fr);
gap:40px;
`

const Field = styled.input``

const Button = styled.button``


const Login = () => {

    const [loginInfo, setLoginInfo] = useState({
        email:"",
        password:"",
    })

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
    <Container>
        <Wrapper>
            <Form>
                <Field name="email" onChange={handleChange}></Field>
                <Field name="password" onChange={handleChange}></Field>
                <Button onClick={handleLogin}>Login</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login
