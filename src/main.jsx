import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Products from "./pages/Products/index.jsx";
import ProductDetails from "./pages/ProductDetails/index.jsx";
import Cart from "./pages/Cart/index.jsx";
import Contact from "./pages/Contact/index.jsx";
import Checkout from "./pages/Checkout/index.jsx";
import AdminDashboard from "./pages/Admin/index.jsx";
import AdminProducts from "./pages/Admin/Products/index.jsx";
import AdminOrders from "./pages/Admin/Orders/index.jsx";
import AdminCategories from "./pages/Admin/Categories/index.jsx";
import AllProducts from "./pages/Admin/Products/AllProducts.jsx";
import AddProduct from "./pages/Admin/Products/AddProduct.jsx";
import ViewProduct from "./pages/Admin/Products/ViewProduct.jsx";
import OrderListing from "./pages/Admin/Orders/OrderListing.jsx";
import OrderDetails from "./pages/Admin/Orders/OrderDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
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
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "checkout",
    element: <Checkout />,
  },
  {
    path: "admin",
    element: <AdminDashboard />,
    children: [
      {
        path: "products",
        element: <AdminProducts />,
        children: [
          {
            path: "",
            element: <AllProducts />,
          },
          {
            path: ":id",
            element: <ViewProduct />,
          },
          {
            path: "add",
            element: <AddProduct />,
          },
          {
            path: "add/:id",
            element: <AddProduct />,
          },
        ],
      },
      {
        path: "orders",
        element: <AdminOrders />,
        children: [
          {
            path: "",
            element: <OrderListing />,
          },
          {
            path: ":id",
            element: <OrderDetails />,
          },
        ],
      },
      {
        path: "categories",
        element: <AdminCategories />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
