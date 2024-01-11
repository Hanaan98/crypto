import React from "react";

const statusMap = {
  completed: {
    title: "Completed",
    color: "#67D194",
  },
  pending: {
    title: "Pending",
    color: "#FEAD52",
  },
};

const OrderStatus = ({ status }) => {
  console.log(statusMap[status]["color"]);
  return (
    <div
    style={{backgroundColor:statusMap[status]["color"] , border:`1px solid white`}}
      className={`flex items-center justify-center rounded-lg px-2 py-1 border-2 border-solid border-${statusMap[status]["color"]}-800 bg-${statusMap[status]["color"]}-500`}
    >
      <p className="text-sm">
        {statusMap[status]["title"]}
      </p>
    </div>
  );
};

export default OrderStatus;
