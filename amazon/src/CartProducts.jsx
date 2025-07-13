// CartProducts.jsx file

import React, { useEffect, useState } from 'react'
import axios from 'axios'

function CartProducts() {

    const [cartproducts, setCartproducts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3000/cart')
            .then((data) => setCartproducts(data.data))
            .catch((error) => {
                console.log(error);
                setError(error.message)
            })

    }, [])

    return (
        <div>

            {cartproducts.length > 0 ? (

                cartproducts.map((product) => (
                    <div key={product.id} className='cart-container'>
                        <div>
                            <img src={product.image} alt={product.name}
                                style={{ width: '150px', height: "100px" }}
                            />
                        </div>

                        <div>
                            <b>{product.name}</b>
                            <h5>$ {product.priceCents}</h5>
                            <p>Quantity: 2</p>
                            <span className='m-2'>Update</span>
                            <span>Delete</span>


                        </div>

                        <div>

                            <b className='my-2'>Choose a delivery option</b> <br />
                            <label>
                                <input type='radio' name={product.id} value='free' />
                                Free Shipping
                            </label> <br />
                            <label>
                                <input type='radio' name={product.id} value='minimun' />
                                $4.99 - Shipping cost
                            </label> <br />
                            <label>
                                <input type='radio' name={product.id} value='maximum' />
                                $9.99 - shipping cost
                            </label>
                        </div>

                    </div>
                ))
            )




                : (<div> No product </div>)}


        </div>
    )
}

export default CartProducts