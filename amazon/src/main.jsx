import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Navbar from './Navbar.jsx'
import Products from './Products.jsx'
import Cart from './Cart.jsx'


const router = createBrowserRouter([{
  path: '/nav',
  element: <Navbar />
},
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
}])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
