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
      // 4. Setting dogImage to the image url that we received from the response above
  .then(data => setCart(data))
},[])

  return (
    <>
      <Head/>
      <Body cart={cart}/>
      <Footer/>
    </>
  )
}

export default App
