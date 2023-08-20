import styled from "styled-components"

const Container = styled.div`
width:100%;
background-color:teal;
color:white;
text-align:center;
padding:7px;
`

const Announcements = () => {
  return (
    <Container>
        Super Deal Free Shipping on Orders Over 800 Rupees
    </Container>
  )
}

export default Announcements
