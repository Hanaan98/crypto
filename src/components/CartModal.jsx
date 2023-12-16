import { MdClose } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const length = 1;
function CartModal({ onclick }) {
  return (
    <div className="w-full  bg-accent h-screen flex flex-col rounded-xl gap-5 overflow-hidden">
      <div className="flex flex-col w-full mt-5">
        <div className="flex items-center justify-between w-full px-6 sticky top-0 left-0 right-0 z-50 ">
          <h3 className="text-2xl text-white font-bold mb-2 ">Your Cart</h3>
          <button onClick={onclick}>
            <MdClose size={24} className="text-white hover:text-gray-400" />
          </button>
        </div>
        <hr className="border-[#ffffff14] w-full mt-5" />
      </div>
      {length < 1 ? (
        <div className="px-2 max-h-[25.5rem] h-[25.5rem]">
          <h1 className="text-3xl text-center font-semibold text-heading mb-4">
            No Items in Cart
          </h1>
        </div>
      ) : (
        <div className="w-full px-2 flex flex-col gap-2 max-h-[25.5rem] overflow-scroll main h-[25.5rem]">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      )}
      <div className="flex justify-end px-2">
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
