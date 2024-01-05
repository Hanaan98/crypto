import { MdClose } from "react-icons/md";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import CartContext from "../Context/CartContext";
function CartModal({ onclick }) {
  const cart = useContext(CartContext);
  console.log(cart.items);
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
        {cart.items.length < 1 ? (
          <div className="max-h-[25.5rem] h-[25.5rem] flex items-center justify-center">
            <h1 className="text-3xl text-center font-semibold text-heading mb-4">
              No Item in Cart
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

      <div className="flex justify-end px-2 py-2">
        {cart.items.length > 0 ? (
          <Link to="/cart">
            <button className="bg-secondary px-6 py-3 text-white rounded-lg">
              Proceed
            </button>
          </Link>
        ) : (
          <button
            disabled
            className="bg-secondary cursor-not-allowed opacity-80 px-6 py-3 text-white rounded-lg"
          >
            Proceed
          </button>
        )}
      </div>
    </div>
  );
}

export default CartModal;
