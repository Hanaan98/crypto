import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";

export default function AddCategoryModal({ onClose }) {
  return (
    <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-accent z-10 rounded-md px-4  py-1 ">

      <div className="flex justify-end text-white">
        <div onClick={onClose} style={{borderRadius:"50%"}} className="flex cursor-pointer justify-center items-center bg-white h-[16px] w-[16px]">
            <p className="text-black text-[10px]">x</p>
        </div>
      </div>
      <div className="py-4">
        <h1 className="text-white text-center text-[20px] font-semibold">
          Add a New Category
        </h1>
        <div className="p-2 mt-4">
          <div className="my-2">
            <input
              placeholder="Category"
              className=" text-[14px] bg-white rounded-md p-2"
            />
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={onClose}
              className="text-black  text-md bg-white rounded-lg py-1 px-3"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
