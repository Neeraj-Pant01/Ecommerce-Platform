import React, { useState } from 'react'
import { styled } from 'styled-components'
import Navbar from '../components/Navbar'
import Announcements from "../components/Announcements"
import Products from "../components/Products"
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

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

const AllProducts = () => {
  const [color,setColor] = useState()
  const [search, setSearch] = useState("")
  return (
    <Container>
        <Navbar setSearch={setSearch}/>
        <Announcements />
        <Title>Dresses</Title>
        <FilterConatiner>
            <Filter>
                <FilterText>Filter Products</FilterText>
                <Select onChange={(e)=>setColor(e.target.value)}>
                    <Option disabled defaultValue={""}>Color</Option>
                    <Option>white</Option>
                    <Option>black</Option>
                    <Option>red</Option>
                    <Option>blue</Option>
                    <Option>yellow</Option>
                    <Option>green</Option>
                </Select>
                <Select>
                <Option disabled defaultValue={""}>Size</Option>
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
        <Products color={color} search={search}/>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default AllProducts
