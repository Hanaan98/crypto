import React from "react";

const CartItem = () => {
  return (
    <tr className="mb-3">
      <td  className="py-2">2</td>
      <td  className="py-2">
        <div className="flex items-center gap-2">
          <div>
            <img
              className="rounded-sm"
              style={{ width: 60, height: 60, objectFit: "cover" }}
              src="https://i.seadn.io/gcs/files/aa98dbd1ecf8973695f6096bae3753da.jpg?auto=format&dpr=1&h=500&fr=1"
              alt=""
            />
          </div>
          <div>
            <p>Product Name</p>
            <p className="text-[14px] font-light">(Category)</p>
          </div>
        </div>
      </td>
      <td  className="py-2">
        <div className="flex justify-between w-[80px] border border-zinc-300 rounded-xl">
          <button className="flex-1 border-r">-</button>
          <span className="flex-1 text-center">0</span>
          <button className="flex-1 border-l">+</button>
        </div>
      </td>
      <td  className="py-2">
        <p>Q*P</p>
      </td>
      <td  className="py-2">
        <button>remove</button>
      </td>
    </tr>
  );
};

export default CartItem;
