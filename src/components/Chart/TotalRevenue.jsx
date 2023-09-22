import React from "react";
import { Total } from "./Total";

const TotalRevenue = () => {
  return (
    <div className="bg-white border border-[#F8F9FA] rounded-xl  p-5 shadow-md font-sans lg:col-span-4">
      <h5 className="font-bold text-[#05004E] text-lg    ">
        Total Revenue
      </h5>
      <div>
        <Total />
      </div>
    </div>
  );
};

export default TotalRevenue;
