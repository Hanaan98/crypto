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
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
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

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
