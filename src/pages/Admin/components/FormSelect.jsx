import React from "react";

const FormSelect = ({ title , options }) => {
  return (
    <div className="w-full">
      {title && <p className="text-white">{title} :</p>}
      <select className=" px-2 bg-white rounded-lg mt-2 w-full h-[46px]">
        {options.map((option , index) => {
          return <option   key={index} value={option.value}>{option.name}</option>;
        })}
      </select>
    </div>
  );
};

export default FormSelect;
