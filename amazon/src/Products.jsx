// Products.jsx File

import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios';

function Products() {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [qty, setQty] = useState({});

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



  const handleChange = (e, productid, productName) => {
    console.log(productid);
    console.log(productName);
    const quantity = parseInt(e.target.value);
    console.log(quantity);
    setQty((prevqty) => ({
      ...prevqty,
      [productid]: quantity
    }))
    console.log(quantity)
  };

  const handleAddtoCart = async (name, id, image, price, quantity) => {
    console.log('add to cart button clicked');
    try {

      const res = await axios.get(`http://localhost:3000/cart/?id=${id}`);
      if (res.data.length > 0) {

        console.log("data already exist");
        return

      }

      await axios.post('http://localhost:3000/cart', { "name": name, "id": id, "image": image, "priceCents": price, "quantity": quantity })
        .then((data) => console.log("data added"))
    }

    catch (error) {
      console.log(error);
      setError(error.message)
    }

  }

  return (
    <div className='main-container'>

      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className='product-container'>

            <img src={product.image} alt={product.name}
              style={{ width: '200px', height: '250px' }} />

            <div> <b>{product.name}</b> </div>

            <div className='d-flex justify-content-center' >
              <img src={`/ratings/rating-${(product.rating.stars) * 10}.png`} alt='ratings'
                style={{ width: '100px', height: '20px' }}
              />

              <p>{product.rating.count}</p>

            </div>

            <h3>${product.priceCents}</h3>

            <div className="product-quantity-container">
              <select
                value={qty[product.id] || 1}
                onChange={(e) => handleChange(e, product.id)}
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>

            </div>

            <button type='button' onClick={(() => { handleAddtoCart(product.name, product.id, product.image, product.priceCents, qty[product.id] || 1) })}>Add to Cart</button>
          </div>))
      ) : (<div>No Products </div>)}
    </div>
  )
}

export default Products