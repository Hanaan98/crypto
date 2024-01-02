import React from "react";
import FormInput from "../components/FormInput";
import FormSelect from "../components/FormSelect";
import thumbnail from "../../../assets/UploadThumbnail.png";

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

const AddProduct = () => {
  return (
    <div className=" pb-9">
      <div>
        <h1 className="text-white font-bold text-[22px]">Add Product</h1>
      </div>
      <div className="mt-8">
        <div style={{ flex: 1 }} className="flex flex-col w-full gap-5">
          {/* Title */}
          <div>
            <FormInput title={"Title"} placeholder={"Product's Title"} />
          </div>

          {/* Price */}
          <div className="flex items-center gap-6">
            <FormInput title={"Price"} placeholder={"Product's Price"} />
            <FormSelect title={"Unit"} options={unitOptions} />
          </div>

          {/* Quantity & Category */}
          <div className="flex">
            <div
              style={{ flex: 1 }}
              className="flex items-center flex-col justify-center gap-8"
            >
              <FormInput title={"Quantity"} placeholder={"In Stock"} />
              <div className="w-full">
                <FormSelect title={"Category"} options={categoryOptions} />
              </div>
            </div>

            {/* Image */}
            <div
              style={{ flex: 1 }}
              className="flex justify-center items-start"
            >
              <div className="py-8 px-12 bg-accent rounded-lg mt-4 flex justify-center items-center bg-gradient-to-r from-accent to-gray-800">
                <label htmlFor="product-img" className="cursor-pointer">
                  <img
                    style={{ height: "150px", width: "150px" }}
                    src={thumbnail}
                  />
                </label>
                <input hidden type="file" name="img" id="product-img" />
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-white">Description :</p>
            <textarea
              placeholder="Description"
              rows={5}
              className="flex-1 w-full rounded-lg p-2 mt-2 focus:outline-none"
            />
          </div>

          <div className="flex justify-end">
            <button className="w-[160px] bg-secondary border-none rounded-md py-4 px-4 text-sm text-white">
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
