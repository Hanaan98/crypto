<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Products from "./pages/Products/index.jsx";
import ProductDetails from "./pages/ProductDetails/index.jsx";
import Cart from "./pages/Cart/index.jsx";
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/index.jsx';
import Products from './pages/Products/index.jsx';
import ProductDetails from './pages/ProductDetails/index.jsx';
import Cart from './pages/Cart/index.jsx';
>>>>>>> 2a5f4da9289046ec2e03c65981821230ab2eb7ac

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
<<<<<<< HEAD
    path: "products",
    element: <Products />,
  },
  {
    path: "products/:id",
    element: <ProductDetails />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
=======
    path:"products",
    element : <Products/>
  },
  {
    path : "products/:id",
    element : <ProductDetails/>
  },
  {
    path : "cart",
    element : <Cart/>
  }
>>>>>>> 2a5f4da9289046ec2e03c65981821230ab2eb7ac
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
