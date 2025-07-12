// Navbar.jsx File

import React from 'react'

function Navbar() {
  return (
    <div className='navs'>
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

      <div className="cart">
        cart
        <i className="bi bi-cart3"></i>
        <span>0</span>
      </div>

    </div>
  )
}

export default Navbar