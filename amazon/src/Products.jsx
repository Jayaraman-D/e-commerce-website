// Products.jsx File

import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

function Products() {

  const [Products, setProducts] = useState([]);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {

    fetch('http://localhost:3000/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('URL DOES NOT EXIST')
        }
        else {
          return response.json()
        }
      })
      .then((data) => setProducts(data))
      .catch((error) => {
        console.log(error);
        setError(error.message);
      })

  }, [])

  if (error) {
    return (
      <div>
        {error}
      </div>
    )
  }
  return (
    <div className='main-container'>

      {Products.length > 0 ? (
        Products.map((product) => (
          <div key={product.id} className='product-container'>

            <img src={product.image} alt={product.name}
              style={{ width: '200px', height: '250px' }} />

            <div> <b>{product.name}</b> </div>

            <div className='d-flex justify-content-center' >
              <img src={`public/ratings/rating-${(product.rating.stars)*10}.png`} alt='ratings'
                style={{ width: '100px', height: '20px' }}
              />

              <p>{product.rating.count}</p>

            </div>

            <h3>${product.priceCents}</h3>

            <div className="product-quantity-container">
              <select>
                <option selected value={product.id}>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <button type='button'>Add to Cart</button>
          </div>))
      ) : (<div>No Products </div>)}
    </div>
  )
}

export default Products