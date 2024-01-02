import React from "react";
import OrderStatus from "./components/OrderStatus";
import { Link } from "react-router-dom";

const OrderListing = () => {
  return (
    <div className="pb-20">
      <div>
        <h1 className="text-white font-semibold text-3xl">Orders</h1>
      </div>
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
                      Customer Name
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-medium text-white px-6 py-4 text-center"
                    >
                      Order Id
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-medium text-white px-6 py-4 text-center"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-medium text-white px-6 py-4 text-center"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-medium text-white px-6 py-4 text-center"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {new Array(10).fill(0).map((_, index) => {
                    return (
                      <tr key={index} className=" border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-300 text-center">
                          {index + 1}
                        </td>
                        <td className="text-md text-gray-300 font-light px-6 py-4 whitespace-nowrap text-center">
                          Abdul Saboor
                        </td>
                        <td className="text-md text-gray-300 font-light px-6 py-4 whitespace-nowrap text-center">
                          <Link to="123" className=" underline">
                            171be13
                          </Link>
                        </td>
                        <td className="text-md text-gray-300 font-light px-6 py-4 whitespace-nowrap text-center">
                          0.31 ETH
                        </td>
                        <td className="text-md text-gray-300 font-light px-6 py-4 whitespace-nowrap text-center">
                          20-12-2023
                        </td>
                        <td>
                          <OrderStatus
                            status={index % 2 == 0 ? "completed" : "pending"}
                          />
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

export default OrderListing;
