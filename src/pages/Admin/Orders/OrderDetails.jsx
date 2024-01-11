import React from "react";
import FormSelect from "../components/FormSelect";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const statusOptions = [
  {
    name : "completed",
    value : -1
  },{
    name : "pending",
    value : -1
  },{
    name : "cancelled",
    value : -1
  }
]

const OrderDetails = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="flex gap-2 items-center">
      <IoMdArrowBack
            onClick={() => navigate(-1)}
            className="text-white text-2xl cursor-pointer"
          />
        <h1 className="text-white text-3xl font-semibold">Order Details</h1>
      </div>
      <div className="w-1/2 flex flex-col gap-3 mt-4">
        {/* Customer Name */}
        <div className="flex gap-3 justify-between items-center">
          <p className="flex-1 text-lg font-semibold text-white">Customer Name:</p>
          <p className="flex-1 text-md text-white">Abdul Saboor</p>
        </div>
        {/* Order Id */}
        <div className="flex gap-3 justify-between items-center">
          <p className="flex-1 text-lg font-semibold text-white">Order Id:</p>
          <p className="flex-1 text-md text-white">0718123</p>
        </div>
        {/* Address */}
        <div className="flex gap-3 justify-between items-start">
          <p className="flex-1 text-lg font-semibold text-white">Address:</p>
          <p className="flex-1 text-md text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        {/* Grand Total Amount */}
        <div className="flex gap-3 justify-between items-center">
          <p className="flex-1 text-lg font-semibold text-white">Grand Total:</p>
          <p className="flex-1 text-md text-white">
            0.62 ETH
          </p>
        </div>
        {/* Order Status */}
        <div className="flex gap-3 justify-between items-center">
          <p className="flex-1 text-lg font-semibold text-white">Status:</p>
          <div className="flex-1">
            <FormSelect options={statusOptions}/>
          </div>
        </div>
        
      </div>
      {/* Order Products Table */}
      <div className="flex flex-col bg-accent rounded-lg mt-6 px-3 pb-2">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className=" inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className=" border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-lg font-medium text-white px-6 py-4 text-center"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-medium text-white px-6 py-4 text-center"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-medium text-white px-6 py-4 text-center"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-medium text-white px-6 py-4 text-center"
                    >
                      Total
                    </th>
                    
                    
                  </tr>
                </thead>
                <tbody>
                  {new Array(2).fill(0).map((_, index) => {
                    return (
                      <tr key={index} className=" border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-300 text-center">
                          {index + 1}
                        </td>
                        <td className="text-md text-gray-300 font-light px-6 py-4 whitespace-nowrap text-center">
                          Boomland Shards
                        </td>
                        <td className="text-md text-gray-300 font-light px-6 py-4 whitespace-nowrap text-center">
                          2
                        </td>
                        <td className="text-md text-gray-300 font-light px-6 py-4 whitespace-nowrap text-center">
                          0.31 ETH
                        </td>
                        
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
