import { MdClose } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const length = 1;
function CartModal({ onclick }) {
  return (
    <div className="w-full bg-accent h-screen flex flex-col rounded-s-3xl gap-5 overflow-hidden">
      <div className="flex flex-col w-full mt-5">
        <div className="flex items-center justify-between w-full px-6 sticky top-0 left-0 right-0 z-50 ">
          <h3 className="text-2xl text-white font-bold mb-2 ">Your Cart</h3>
          <button onClick={onclick}>
            <MdClose size={24} className="text-white hover:text-gray-400" />
          </button>
        </div>
        <hr className="border-[#ffffff14] w-full mt-5" />
      </div>

      <div className="flex-grow overflow-auto px-2">
        {length < 1 ? (
          <div className="max-h-[25.5rem] h-[25.5rem] flex items-center justify-center">
            <h1 className="text-3xl text-center font-semibold text-heading mb-4">
              No Items in Cart
            </h1>
          </div>
        ) : (
          <div className="w-full flex flex-col gap-2">
            {/* Replace the hard-coded items with your CartItem component */}
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
        )}
      </div>

      <div className="flex justify-end px-2 py-2">
        {length > 0 ? (
          <Link to="/cart">
            <button className="bg-secondary px-6 py-3 text-white rounded-lg">
              Proceed
            </button>
          </Link>
        ) : (
          <Link to="/cart">
            <button
              disabled
              className="bg-secondary opacity-80 px-6 py-3 text-white rounded-lg"
            >
              Proceed
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default CartModal;
