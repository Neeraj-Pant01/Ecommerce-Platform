import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

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


const Register = () => {

    const [newUser, setNewUSer] = useState({
        username:"",
        email:"",
        password:"",
        state:"",
        city:"",
        district:""
    })
    const navigate = useNavigate();

    const handleChange = (e) =>{
        const {value, name} = e.target;

        setNewUSer((pre)=>{
            return {...pre,[name]:value}
        })
    }
    
    const handleRegister = async (e) =>{
        e.preventDefault();
        try{
            const response = await axios.post(`${import.meta.env.VITE_REACT_APP_URI}auth/register`,newUser)
            Navigate('/login')
        }catch(err){
            console.log(err)
        }
    }

  return (
    <Container>
        <Wrapper>
            <Form>
                <Field name="username" onChange={handleChange}></Field>
                <Field name="email" onChange={handleChange}></Field>
                <Field name="password" onChange={handleChange}></Field>
                <Field name="state" onChange={handleChange}></Field>
                <Field name="district" onChange={handleChange}></Field>
                <Field name="city" onChange={handleChange}></Field>
                <Button onClick={handleRegister}>Register</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register
