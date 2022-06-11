import React, {useEffect} from 'react'
import {Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap' 
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'
import { useParams } from 'react-router-dom';
import { useLocation } from "react-router-dom";



export default function CartScreen() {
    
    const { id } = useParams();
    const location = useLocation();
    const productId= id
    const qty= location.search?Number(location.search.split('=')[1]):1
     
     const dispatch= useDispatch()
     const cart = useSelector(state=>state.cart) 
     const  {cartItems} =cart
     console.log(cartItems)
     useEffect(()=> {
         if(productId){
             dispatch(addToCart(productId, qty))
         }
     }, [dispatch , productId, qty])
  return (
    <Row>
    <Col  md={8}>
    <h1>shopping cart</h1>
    { cartItems.length ===0? ( 
        <Message variant="info">
        Your cart is empty <Link to='/'>Go back</Link>

        </Message>

    ) :
    (
        <ListGroup variant='flush'>
        { 
            cartItems.map(item => {
                <ListGroup.Item Key={item.product}>
                <Row>
                    <Col md={2}>
                        <Image src={item.image}alt={item.name} fluid rounded/>
                    </Col>
                    <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>

                    </Col>
                    <Col md={2}>
                        ${item.price}
                    </Col>
                </Row>
                </ListGroup.Item>

            })
        }

        </ListGroup>
        
    )}
    </Col>
    </Row>
  )
}
