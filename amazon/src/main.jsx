import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import Products from './Products.jsx'
import Cart from './Cart.jsx'
import CartProducts from './CartProducts.jsx'


const router = createBrowserRouter([
{
  path: '/',
  element: <App />
},
{
  path: '/products',
  element: <Products />
},
{
  path: '/cart',
  element: <Cart />
},
{
  path:'/carts',
  element:<CartProducts/>
}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)