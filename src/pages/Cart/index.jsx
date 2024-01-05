import React, { useContext, useEffect } from "react";
import CartItem from "../../components/CartItem";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
import cartContext from "../../Context/CartContext";
const Cart = () => {
  const cart = useContext(cartContext);
  useEffect(() => {
    window.scrollTo(0, 0);
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
              <div className="mt-7">
                {cart.items.length < 1 ? (
                  <div className="max-h-[25.5rem] h-[25.5rem] flex items-center justify-center">
                    <h1 className="text-3xl text-center font-semibold text-heading mb-4">
                      No Items in Cart
                    </h1>
                  </div>
                ) : (
                  <div className="w-full flex flex-col gap-2">
                    {cart.items.map((item) => (
                      <CartItem key={item.id} item={item} />
                    ))}
                  </div>
                )}
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
                  <p className=" font-thin text-[14px] text-white">
                    {cart.totalAmount} USDC
                  </p>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <p className="font-medium text-white">Shipping</p>
                  <p className=" font-thin text-[14px] text-white">Free</p>
                </div>
                <div className="mt-5 flex justify-between items-center">
                  <p className="font-medium text-white">Grand Total</p>
                  <p className=" font-thin text-[14px] text-white">
                    {cart.totalAmount} USDC
                  </p>
                </div>

                <div className="flex mt-6 justify-center">
                  {cart.items.length < 1 ? (
                    <button className=" text-base w-[250px] py-3 bg-secondary text-white border-none rounded-md opacity-50 cursor-not-allowed">
                      Checkout
                    </button>
                  ) : (
                    <Link to="/checkout">
                      <button className=" text-base w-[250px] py-3 bg-secondary text-white border-none rounded-md">
                        Checkout
                      </button>
                    </Link>
                  )}
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
