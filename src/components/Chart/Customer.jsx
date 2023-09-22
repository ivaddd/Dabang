import React from "react";
import { Customerl } from "./Customerl";
import gp from "./Group 18.png";
const Customer = () => {
  return (
    <div className="  bg-white border border-[#F8F9FA] rounded-xl  p-5 shadow-md font-sans lg:col-span-3 ">
      <h5 className="font-bold text-[#05004E] text-lg mb-3 ">
        Customer Satisfaction
      </h5>
      <div>
        <Customerl />
      </div>
      <div className="flex flex-row gap-4 pl-9 pr-9 pt-5">
        <div className="pt-2 pl-3">
          <img src={gp} alt="" />
        </div>
        <div>
          <h1 className="text-[#96A5B8] text-[16px]">Last Month</h1>
          <h1 className="text-[14px]">$3,004</h1>
        </div>

        <div className="pt-2 pl-3">
          <img src={gp} alt="" />
        </div>
        <div>
          <h1 className="text-[#96A5B8] text-[16px]">Last Month</h1>
          <h1 className="text-[14px]">$3,004</h1>
        </div>
      </div>
    </div>
  );
};

export default Customer;
