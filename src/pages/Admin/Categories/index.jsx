import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import AddCategoryModal from "./components/AddCategoryModal";

const AdminCategories = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="p-6 relative h-[100%]">
      {modalIsOpen && <AddCategoryModal onClose={closeModal}
      />}
      {/* <AddCategoryModal/> */}
      <div className={`flex flex-col w-full h-[100%] ${modalIsOpen && "opacity-5"}`}>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl text-white font-semibold">Categories</h1>
          <button
            onClick={openModal}
            className="text-black  text-md bg-white rounded-lg py-1 px-3"
          >
            Add New
          </button>
        </div>


        <div className="flex overflow-y-auto flex-1 flex-col bg-accent rounded-lg mt-6 px-3 pb-2">
          <div className="overflow-x-auto">
            <div className="h-[100%] inline-block min-w-full sm:px-6 lg:px-8">
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
                        Title
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-medium text-white px-6 py-4 text-center"
                      >
                        Products
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-medium text-white px-6 py-4 text-center"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {new Array(20).fill(0).map((_, index) => {
                      return (
                        <tr key={index} className=" border-b">
                          <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-300 text-center">
                            {index + 1}
                          </td>
                          <td className="text-md text-gray-300 font-light px-6 py-4 whitespace-nowrap text-center">
                            Electronics
                          </td>
                          <td className="text-md text-gray-300 font-light px-6 py-4 whitespace-nowrap text-center">
                            22
                          </td>
                          <td className="text-md text-gray-300 font-light px-6 py-4 whitespace-nowrap text-center">
                            <div className="flex items-center justify-center gap-2">
                              <button className="text-xl">
                                <FaEdit />
                              </button>
                              <button className="text-xl">
                                <MdDelete />
                              </button>
                            </div>
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
    </div>
  );
};

export default AdminCategories;
