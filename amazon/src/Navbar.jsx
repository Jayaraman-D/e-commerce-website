// Navbar.jsx File

import React from 'react'
import Cart from './Cart.jsx';
import CartProducts from './CartProducts.jsx';
import { useNavigate } from 'react-router-dom'

function Navbar() {
const navigate = useNavigate();

  return (
    <div className='navs' onClick={()=>{navigate('/')}}>
      <div className="amazon-logo">
        <img src='public/logos/amazon-logo-white.png' alt='logo' />
      </div>

      <div className="search">
        <input type='text' placeholder='search' />
        <i className="bi bi-search"></i>
      </div>

      <div className="returns-orders">
        Returs & Orders
      </div>

      <div className="cart" onClick={()=>{navigate('/carts')}}>
        cart
        <i className="bi bi-cart3"></i>
        <span>0</span>
      </div>

    </div>
  )
}

export default Navbar