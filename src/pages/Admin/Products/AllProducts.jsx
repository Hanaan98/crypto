import React from "react";
import { MdOutlineSearch } from "react-icons/md";
import ProductCard from "../../../components/ProductCard";
import { ART_PRODUCTS } from "../../../Data";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
  const navigate = useNavigate()
  return (
    <div className="pb-5">
      <div>
        <div className="flex justify-between items-center ">
          <h1 className=" text-3xl text-white font-semibold">Products</h1>
          <button onClick={() => navigate("add")} className="text-black  text-md bg-white rounded-lg py-1 px-3">
            Add New
          </button>
        </div>
        <div className="mt-4 flex justify-between items-center bg-accent rounded-xl p-4">
          <div>
            <p className="text-white">Sort By :</p>
          </div>
          <div className="flex items-center rounded-lg px-[8px] py-[8px] bg-white">
            <input
              placeholder="Search Here"
              className="flex-1 focus:outline-none"
              type="text"
            />
            <MdOutlineSearch className="text-[20px] font-bold" />
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-5">
          {ART_PRODUCTS.map((product, index) => (
            <ProductCard link={"edit"} key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
