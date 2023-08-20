import styled from "styled-components"
import { categories } from "../data"
import CategoryItem from "./CategoryItem"

const Container = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;
`

const Categories = () => {
  return (
    <Container>
        {
            categories.map((c,i)=><CategoryItem key={i} c={c}/>)
        }
    </Container>
  )
}

export default Categories
