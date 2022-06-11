
import { Container } from 'react-bootstrap'

import Header from './components/Header';
import Footer from './components/Footer';

import { Routes, Route, Link } from "react-router-dom";

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';


function App() {
  return (
    <div >
    
       <Header />
       <main className='py-3'>
       <Container>
       <Routes>
       <Route path='/' element={<HomeScreen/>} exact />
       <Route path='/product/:id' element={<ProductScreen />} />
       <Route path='/cart/*' element={<CartScreen />} />
       </Routes>
       </Container>
       </main>
      
       <Footer />
       
    </div>
  );
}

export default App;
