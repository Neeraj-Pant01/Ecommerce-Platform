import React from 'react'
import { styled } from 'styled-components'
import Navbar from '../components/Navbar'
import Announcements from "../components/Announcements"
import Products from "../components/Products"

const Container = styled.div`
`
const Title = styled.h1`
padding:20px;
`
const Filter = styled.div`
display:flex;
align-items:center;
gap:20px;
`
const FilterConatiner = styled.div`
display:flex;
padding:20px;
justify-content:space-between;
`
const FilterText = styled.span`
font-size:20px;
font-weight:600;
`
const Select = styled.select`
padding:10px;
`
const Option = styled.option`
padding:10px;
margin-bottom:10px;

&:checked, &:hover {
  background-color: skyblue;;
  color:white;
}
`

const Products = () => {
  return (
    <Container>
        <Navbar />
        <Announcements />
        <Title>Dresses</Title>
        <FilterConatiner>
            <Filter>
                <FilterText>Filter Products</FilterText>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option>white</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select>
                <Option disabled selected>Size</Option>
                <Option>Xs</Option>
                <Option>Sm</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
                <Option>XXL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products</FilterText>
                <Select>
                    <Option disabled selected>Sort By</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
            </Filter>
        </FilterConatiner>
        <Products />
    </Container>
  )
}

export default Products
