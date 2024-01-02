import React from "react";
import { MdOutlineSearch } from "react-icons/md";
import ProductCard from "../../../components/ProductCard";
import { ART_PRODUCTS } from "../../../Data";
import { Outlet } from "react-router-dom";

const AdminProducts = () => {
  return (
    <div className="p-6 h-full">
      <Outlet/>
    </div>
  );
};

export default AdminProducts;
