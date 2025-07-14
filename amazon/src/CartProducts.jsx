// CartProducts.jsx file

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function CartProducts() {

    const [cartproducts, setCartproducts] = useState([]);
    const [error, setError] = useState('');
    const [deleteCart, setDeleteCart] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/cart')
            .then((data) => setCartproducts(data.data))
            .catch((error) => {
                console.log(error);
                setError(error.message)
            })

    }, [deleteCart])

    const handleDelete = async (id) => {
        axios.delete(`http://localhost:3000/cart/${id}`)
            .then((data) => console.log('deleted from cart'))
            .then(setDeleteCart(!deleteCart))
            .catch((error) => {
                console.log(error)
                setError(error.message)
            })
    }

    return (
        <div>
            <div className='navs'>
                <div className="amazon-logo" onClick={() => navigate('/')}>
                    <img src='/logos/amazon-logo-white.png' alt='logo' />
                </div>
            </div>


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
                            <p>Quantity: {product.quantity}</p>
                            <button type='button' className='btn btn-primary my-2'>update</button>
                            <button type='button' className='btn btn-primary' onClick={() => { handleDelete(product.id) }}>Delete</button>


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