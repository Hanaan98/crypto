import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Rating from "../../ProductDetails/components/Rating";
import CategoryTag from "../components/CategoryTag";

const unitOptions = [
  {
    name: "ETH",
    value: -1,
  },
  {
    name: "BTC",
    value: -1,
  },
];

const categoryOptions = [
  {
    name: "Tech",
    value: -1,
  },
  {
    name: "Education",
    value: -1,
  },
];

const ViewProduct = ({ id }) => {
  const params = useParams();
  const navigate = useNavigate()

  console.log("ID ::: ", params.id);
  return (
    <div>
      <div className="flex items-center gap-6">
        <h1 className="text-3xl font-semibold text-white">
          Product Details
        </h1>
        <button
          onClick={() => navigate("/admin/products/add/1212")}
          className="text-black bg-white rounded-lg py-1 px-3"
        >
          Edit
        </button>
      </div>
      <div className="flex gap-10 mt-4">

        {/* Image */}
        <div style={{ flex: 1 }}>
          <div>
            <img
              className="rounded-xl w-full h-full object-cover"
              src="https://i.seadn.io/gcs/files/aa98dbd1ecf8973695f6096bae3753da.jpg?auto=format&dpr=1&h=500&fr=1"
            />
          </div>
        </div>
        {/* Right Details Section */}
        <div style={{ flex: 1 }} className="flex-col w-full flex justify-around">
          {/* Title */}
          <h1 className="text-2xl font-semibold text-heading mb-4">
            Product Title
          </h1>

          <div className="flex gap-4 items-center mb-4">
            <p className="text-lg font-semibold text-white">Price:</p>
            <p className="text-md text-white">0.43 ETH</p>
          </div>

          <div className="flex gap-4 items-center mb-4">
            <p className="text-lg font-semibold text-white">Rating:</p>
            <Rating />
          </div>

          <div className="flex gap-4 items-center mb-4">
            <p className="text-lg font-semibold text-white">Left in stock:</p>
            <p className="text-md text-white">67</p>
          </div>
          <div className="flex gap-4 items-center mb-4">
            <p className="text-lg font-semibold text-white">Total Orders:</p>
            <p className="text-md text-white">10</p>
          </div>
          <div className="flex gap-4 items-start">
            <p className="text-lg font-semibold text-white">Categories:</p>
            <div className="flex gap-2 flex-wrap">
              <CategoryTag name={"electronics"} />
              <CategoryTag name={"electronics"} />
              <CategoryTag name={"electronics"} />
              <CategoryTag name={"electronics"} />
              <CategoryTag name={"electronics"} />
              <CategoryTag name={"electronics"} />
              <CategoryTag name={"electronics"} />
            </div>
          </div>
        </div>
      </div>


      {/* Description */}
      <div className="mt-6">
        <h1 className="text-2xl font-semibold text-heading mb-4">
          Description
        </h1>

        <p className="text-sm text-[#ffffffa6] mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blanditiis,
          ratione. Sit atque corporis iusto similique explicabo fuga, nobis
          rerum illo corrupti velit numquam odit aspernatur ex quas aliquid
          facilis omnis!
        </p>
      </div>
    </div>
  );
};

export default ViewProduct;
