<<<<<<< HEAD
import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import CartItem from "../../components/CartItem";
import Layout from "../../components/Layout";
const Cart = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className="p-4">
        <div className="flex ">
          <div style={{ flex: 3 }} className="mr-5 rounded-xl bg-accent">
            <div className="p-5">
              <p className="my-3 text-2xl text-white font-bold ">My Cart</p>
              <div className="flex flex-col max-h-96 gap-2 mt-7 overflow-scroll main">
=======
import React from "react";
import Navbar from "../../components/Navbar";
import CartItem from "./components/CartItem";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4 h-[calc(100vh-67px)] overflow-auto">
        <p className="my-3 text-[22px] font-medium">My Cart Page</p>
        <div className="flex mt-8">
          <div style={{ flex: 4 }}>
            <table className="min-w-full">
              <thead>
                <tr className=" text-left">
                  <th>#</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
>>>>>>> 2a5f4da9289046ec2e03c65981821230ab2eb7ac
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
<<<<<<< HEAD
              </div>
            </div>
          </div>
          <div style={{ flex: 2 }}>
            <div className=" bg-accent rounded-xl p-5">
              <p className="my-3 text-2xl text-white font-bold ">
                Cart Summary
              </p>
              <div className="mt-7">
                <div className="flex justify-between items-center">
                  <p className="font-medium text-white">Subtotal</p>
                  <p className=" font-thin text-[14px] text-white">2.3 ETH</p>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <p className="font-medium text-white">Shipping</p>
                  <p className=" font-thin text-[14px] text-white">0.1 ETH</p>
                </div>
                <div className="mt-5 flex justify-between items-center">
                  <p className="font-medium text-white">Grand Total</p>
                  <p className=" font-thin text-[14px] text-white">2.4 ETH</p>
                </div>

                <div className="flex mt-6 justify-center">
                  <button className=" text-sm w-[250px] py-2 bg-secondary text-white border-none rounded-md">
                    Proceed To Checkout
                  </button>
                </div>
=======
              </tbody>
            </table>
          </div>
          <div style={{ flex: 2 }}>
            <div className="border rounded-md p-5">
              <p className="font-medium text-[21px]">Cart Summary</p>
              <div className="mt-7">
                <div className="flex justify-between items-center">
                  <p className="font-medium">Subtotal</p>
                  <p className=" font-thin text-[14px]">2.3 ETH</p>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <p className="font-medium">Shipping</p>
                  <p className=" font-thin text-[14px]">0.1 ETH</p>
                </div>
                <div className="mt-5 flex justify-between items-center">
                  <p className="font-medium">Grand Total</p>
                  <p className=" font-thin text-[14px]">2.4 ETH</p>
                </div>

                <div className="flex mt-6 justify-center">
                  <button className=" text-sm w-[250px] py-2 bg-zinc-300 border-none rounded-md">Proceed To Checkout</button>
                </div>

>>>>>>> 2a5f4da9289046ec2e03c65981821230ab2eb7ac
              </div>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </Layout>
=======
    </div>
>>>>>>> 2a5f4da9289046ec2e03c65981821230ab2eb7ac
  );
};

export default Cart;
