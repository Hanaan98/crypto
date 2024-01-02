import React, { useEffect } from "react";
import CartItem from "../../components/CartItem";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
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
              <p className="my-3 text-3xl text-white font-bold ">
                Shopping Cart
              </p>
              <div className="flex flex-col max-h-screen gap-2 mt-7 overflow-scroll main">
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
              </div>
            </div>
          </div>
          <div style={{ flex: 2 }}>
            <div className=" bg-accent rounded-xl p-5">
              <p className="my-3 text-lg text-white font-semibold ">
                Order Summary
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
                  <Link to="/checkout">
                    <button className=" text-base w-[250px] py-3 bg-secondary text-white border-none rounded-md">
                      Checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
