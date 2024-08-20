// src/App.jsx

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'mdbreact/dist/css/mdb.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Products from './page/Products';
import ProductDetails from './Component/ProductDetails';
import Cart from './Component/Cart';
import Checkout from './page/Checkout';
import { CartProvider } from './Component/CartContext';
import Contact from './page/Contact';
import BlogPost from './page/BlogPost';
import AboutUs from './page/AboutUs';
import Loginn from './page/Loginn';
import Registerr from './page/Registerr';

function App() {
  return (
    <CartProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/category/:category" element={<Products />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path='/blog' element={<BlogPost />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/login' element={<Loginn />} />
            <Route path='/create-account' element={<Registerr />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
    
  );
}

export default App;
