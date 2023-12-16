<<<<<<< HEAD
import React, { useEffect } from "react";
=======
import React from "react";
>>>>>>> 2a5f4da9289046ec2e03c65981821230ab2eb7ac
import Navbar from "../../components/Navbar";
import Rating from "./components/Rating";
import DetailsSection from "./DetailsSection";
import RelatedProducts from "./RelatedProducts";
<<<<<<< HEAD
import Layout from "../../components/Layout";
import ProductList from "../../components/ProductList";

const ProductDetails = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className="p-4 overflow-auto flex flex-col gap-10">
        <div className="flex  justify-between gap-5  mt-6">
=======

const ProductDetails = () => {
  return (
    <div>
      <Navbar />

      <div className="p-4 h-[calc(100vh-67px)] overflow-auto">
        <div className="flex  mt-6">
>>>>>>> 2a5f4da9289046ec2e03c65981821230ab2eb7ac
          {/* Image  section */}
          <div className="flex-1 ">
            <div className="">
              <img
<<<<<<< HEAD
                className="rounded-xl w-full h-full object-cover"
=======
                className="rounded-md"
>>>>>>> 2a5f4da9289046ec2e03c65981821230ab2eb7ac
                src="https://i.seadn.io/gcs/files/aa98dbd1ecf8973695f6096bae3753da.jpg?auto=format&dpr=1&h=500&fr=1"
              />
            </div>
          </div>

          {/* Details Section */}
          <DetailsSection />
        </div>

        {/* Related Products */}
<<<<<<< HEAD
        <ProductList heading="Related Products" />
      </div>
    </Layout>
=======
        <RelatedProducts />
      </div>
    </div>
>>>>>>> 2a5f4da9289046ec2e03c65981821230ab2eb7ac
  );
};

export default ProductDetails;
