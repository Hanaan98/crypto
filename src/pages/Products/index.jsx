import React from "react";
import ProductCard from "../../components/ProductCard";
import LeftBar from "./LeftBar";
import Navbar from "../../components/Navbar";
import ProductsSection from "./ProductsSection";

const Products = () => {
  return (
    <div>
      <Navbar />

      <div className="flex h-[calc(100vh-67px)] overflow-auto">
        {/* LeftSide */}
        <LeftBar />

        {/* RightSide */}
        <ProductsSection/>
      </div>
    </div>
  );
};

export default Products;
