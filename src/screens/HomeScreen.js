import React, {useState, useEffect} from 'react'
import { Row, Col} from 'react-bootstrap'
import { useDispatch , useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

// import products from '../product'
import Product from '../components/Product'
// import axios from 'axios' 



export default function HomeScreen() {
  // const [products, setProducts]= useState([])
  const dispatch = useDispatch() 
  const productList= useSelector(state => state.productList)
  const {error, loading, products}= productList

  useEffect(() => {

    
    dispatch(listProducts())
    
    },[dispatch]) 

    
  return (
    <div>
        <h1>latest products</h1>
        {loading? <Loader />: error?<Message variant='danger'>{error}</Message> :
        
        <Row>
            {products.map(product => ( 
                <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            ))}
        </Row>
        }
    </div>
  )
}
