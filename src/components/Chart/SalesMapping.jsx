import React from "react";
import word from "./world 1.png";
const SalesMapping = () => {
  return (
    <div className="  bg-white border border-[#F8F9FA] rounded-xl  p-5 shadow-md font-sans  lg:col-span-3">
      <h5 className="font-bold text-[#05004E] text-lg mb-3 ">Sales Mapping</h5>
      <div>
        <img src={word} />
      </div>
    </div>
  );
};

export default SalesMapping;
