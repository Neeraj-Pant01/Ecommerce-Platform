import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import { styled } from 'styled-components'
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Getcarts } from '../redux/actions/action';

const Container = styled.div`
    `
const Wrapper = styled.div`
    display:flex;
    padding:50px;
    `
const ImageContainer = styled.div`
    flex:1;
    // border:2px solid red;
    height:80vh;
    `
const InfoContainer = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:0px 50px;
    gap:20px;
    `
const Image = styled.img`
height:90%;
width:100%;
    object-fit:cover;
    `
const Title = styled.h1`
    font-weight:200;
    color:grey;
    ma
    `
const Desc = styled.div`
    font-size:17px;
    `
const Amount = styled.span`
    font-size:3.4rem;
    font-weight:100;
    color:grey;
    `
const FilterContainer = styled.div`
    display:flex;
    gap:50px;
    margin-top:10px;
    // border:2px solid red;
    `
const Filter = styled.div`
    display:flex;
    align-items:center;
    gap:10px;
    // border:2px solid red;

    `
const FilterTitle = styled.span`
    display:flex;
    align-items:center;
    font-size:20px;
    color:grey;
    `
const FilterColor = styled.div`
    width:30px;
    height:30px;
    border-radius:50%;
    background-color:${(theme) => theme.color};
    cursor:pointer;
    `
const FilterSelect = styled.select`
    padding:10px;
    `
const FilterOption = styled.option``

const AddContainer = styled.div`
    padding:30px 0px;
    display:flex;
    gap:50px;
    `
const Quantity = styled.span`
    padding:10px 15px 10px 15px;
    border:1px solid teal;
    border-radius:5px;
    `
const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    gap:10px;
    font-weight:600;
    `
const Button = styled.button`
    padding:15px 10px;
    border:2px solid teal;
    font-size:14px;
    color:black;
    background:transparent;
    cursor:pointer;

    &:hover{
        background-color:#eee;
        // border:3px solid teal;
    }
    `

const SingleProduct = () => {

  const [product, setProduct] = useState()
  const [quatity, setQuantity] = useState(1)
  const [color, setColor] = useState("")
  const [size, setSize] = useState("");
  const [cart, setCart] = useState()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector((user) => user.LoginReducer.currentUser)
  const currentCart = useSelector((cart) => cart.cartReducer.payload)

  const { id } = useParams();

  //get current product
  useEffect(() => {
    const getAproduct = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_REACT_APP_URI}products/${id}`)
        setProduct(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getAproduct()
  }, [id])


  //get user's cart to check if cart is alreay available or not
  useEffect(() => {
    const getCart = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URI}cart/${user?._id}`, {
          headers: {
            "Authorization": `Bearer ${user?.accesstoken}`
          }
        })
        if (response.status === 200) {
          setCart(response.data)
        } else {
          return
        }
      } catch (err) {
        console.log(err)
      }
    }
    getCart()
  }, [user?._id])


  //update or create new cart
  const handleCart = async () => {
    try {
      const url = `${import.meta.env.VITE_REACT_APP_URI}cart/`;

      const response = cart
        ? await axios.put(`${url}${cart?._id}`, {
          productId: id,
          quantity: quatity,
          size: size,
          color: color,
        }, {
          headers: {
            "Authorization": `Bearer ${user?.accesstoken}`
          }
        })
        : await axios.post(url, {
          productId: id,
          quantity: quatity,
          size: size,
          color: color,
        }, {
          headers: {
            "Authorization": `Bearer ${user?.accesstoken}`
          }
        });
      dispatch(Getcarts(response.data))
    } catch (err) {
      console.log(err);
    }
  };

  const logNavigate = () =>{
    navigate('/login')
  }


  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <ImageContainer>
          <Image src={product?.image} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product?.title}</Title>
          <Desc>{product?.desc}</Desc>
          <Amount>₹{product?.price}</Amount>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {
                Array.isArray(product?.color) ? product?.color.map((c, i) => <FilterColor color={c} key={i} onClick={() => setColor(c)} />)
                  : <FilterColor color={product?.color} onClick={() => setColor(c)} />
              }
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSelect onChange={(e) => setSize(e.target.value)}>
                <FilterOption disabled>select size</FilterOption>
                {
                  Array.isArray(product?.size) ? product.size.map((s) => <FilterOption key={s}>{s}</FilterOption>) :
                    <FilterOption>{product?.size}</FilterOption>
                }
              </FilterSelect>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <IoMdRemove style={{ fontSize: "24px", fontWeight: "600", cursor: "pointer" }} onClick={() => quatity > 1 && setQuantity(quatity - 1)} />
              <Quantity>{quatity}</Quantity>
              <IoMdAdd style={{ fontSize: "24px", fontWeight: "600", cursor: "pointer" }} onClick={() => setQuantity(quatity + 1)} />
            </AmountContainer>
            <Button onClick={user ? handleCart : logNavigate}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default SingleProduct
