import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Rating from "./components/Rating";
import DetailsSection from "./DetailsSection";
import RelatedProducts from "./RelatedProducts";
import Layout from "../../components/Layout";
import ProductList from "../../components/ProductList";
import { ART_PRODUCTS } from "../../Data/index";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <Layout>
      <div className="p-4 overflow-auto flex flex-col gap-20 mt-5">
        {/* Details Section */}
        <DetailsSection />

        {/* Related Products */}
        <ProductList
          heading="Related Products"
          products={ART_PRODUCTS.slice(0, 5)}
        />
      </div>
    </Layout>
  );
};

export default ProductDetails;
