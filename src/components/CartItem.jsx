import React, { useContext } from "react";
import cartContext from "../Context/CartContext";
import { Link } from "react-router-dom";
const CartItem = ({ item }) => {
  const cart = useContext(cartContext);

  const incrementItemHandler = () => {
    cart.addItem({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      amount: 1,
    });
  };
  const decrementItemHandler = () => {
    cart.deleteItem(item.id);
  };

  return (
    <div className="flex justify-between p-3 w-full bg-tertiary rounded-xl items-center">
      <div className="flex items-center gap-3">
        <Link to={`/products/${item.id}`}>
          <img
            src={item.image}
            alt=""
            className="w-[4.5rem] h-[4.5rem] rounded-xl object-cover"
          />
        </Link>
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-md font-semibold tracking-wider">
            {item.title}
          </h1>
          <div className="flex gap-4 items-center">
            <h1
              className="text-secondary text-3xl cursor-pointer"
              onClick={decrementItemHandler}
            >
              -
            </h1>
            <h1 className="text-white">{item.amount}</h1>
            <h1
              className="text-secondary text-3xl cursor-pointer"
              onClick={incrementItemHandler}
            >
              +
            </h1>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-white text-md font-semibold">
          {item.amount * item.price} USDC
        </h1>
      </div>
    </div>
  );
};

export default CartItem;
