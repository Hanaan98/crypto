import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/index.jsx';
import Products from './pages/Products/index.jsx';
import ProductDetails from './pages/ProductDetails/index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"products",
    element : <Products/>
  },
  {
    path : "products/:id",
    element : <ProductDetails/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
