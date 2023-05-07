import React, { useState, useEffect } from 'react'
import "../../src/App.css";
import Head from "./Head.jsx"
import Body from './Body.jsx';
import Footer from './Footer';

function App() {
const [cart, setCart] = useState([])

useEffect(() => {
  fetch("http://localhost:3000/api/items")
  .then(response => response.json())
  .then(data => setCart(data))
},[])

  return (
    <>
      <Head/>
      <Body cartItems={cart} setCartItems={setCart}/>
      <Footer setCartItems={setCart} cartItems={cart}/>
    </>
  )
}

export default App
