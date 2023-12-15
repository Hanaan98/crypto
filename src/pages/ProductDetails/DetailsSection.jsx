import React from "react";
import Rating from "./components/Rating";

const DetailsSection = () => {
  return (
    <div className="flex-1">
      <p className=" font-medium">Category / Product Title</p>
      <p className="font-light text-[14px] my-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis,
        ratione. Sit atque corporis iusto similique explicabo fuga, nobis rerum
        illo corrupti velit numquam odit aspernatur ex quas aliquid facilis
        omnis!
      </p>
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
    </div>
  );
};

export default DetailsSection;
