import React from "react";
import Rating from "./components/Rating";
<<<<<<< HEAD
import toast from "react-hot-toast";

const DetailsSection = () => {
  return (
    <div className="flex-1 px-8 ">
      <h1 className="text-3xl font-semibold text-heading mb-4">
        Product Title
      </h1>
      <p className="text-sm text-[#ffffffa6] mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blanditiis,
=======

const DetailsSection = () => {
  return (
    <div className="flex-1">
      <p className=" font-medium">Category / Product Title</p>
      <p className="font-light text-[14px] my-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis,
>>>>>>> 2a5f4da9289046ec2e03c65981821230ab2eb7ac
        ratione. Sit atque corporis iusto similique explicabo fuga, nobis rerum
        illo corrupti velit numquam odit aspernatur ex quas aliquid facilis
        omnis!
      </p>
<<<<<<< HEAD

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

      <div className="mb-8">
        <button
          onClick={() => toast.success("Added to cart", {})}
          className="w-[160px] bg-secondary border-none rounded-md py-4 px-4 text-sm text-white"
        >
          Add To Cart
        </button>
      </div>

      {/* Additional Details Section */}
      <div>
        <h2 className="text-2xl font-semibold text-heading mb-4">
          Product Details
        </h2>
        <p className="text-sm text-[#ffffffa6]">
          More detailed description or specifications about the product can be
          added here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Blanditiis, ratione. Sit atque corporis iusto similique explicabo
          fuga, nobis rerum illo corrupti velit numquam odit aspernatur ex quas
          aliquid facilis omnis!
        </p>
      </div>
=======
      <div className="flex gap-4 items-center">
        <p className=" text-[18px]">Price :</p>
        <p className=" text-[18px]">0.43 ETH</p>
      </div>

      <div className="flex gap-4 items-center">
        <p className=" text-[18px]">Rating :</p>
        <Rating />
      </div>

      <div className="mt-8 flex gap-4 items-center">
        <p className=" text-[14px]">left in stock :</p>
        <p className=" text-[14px]">67</p>
      </div>

      <div className="mt-8">
        <button className="w-[160px] bg-zinc-200 border-none rounded-md py-2 px-4 text-sm">
          Add To Cart
        </button>
      </div>
>>>>>>> 2a5f4da9289046ec2e03c65981821230ab2eb7ac
    </div>
  );
};

export default DetailsSection;
