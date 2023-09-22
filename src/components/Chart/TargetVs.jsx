import React from "react";
import { Target } from "./Target";
import ava from './Avatar.png'
import ava1 from './Avatar1.png'
const TargetVs = () => {
  return (
    <div className="bg-white border border-[#F8F9FA] rounded-xl  p-5 shadow-md font-sans lg:col-span-3">
      <h5 className="font-bold text-[#05004E] text-lg mb-3 ">
        Target vs Reality
      </h5>
      <div>
        <Target/>
      </div>
      <div className="flex flex-row gap-5 pt-3">
        <div>
            <img src={ava}/>
        </div>
<div className="flex flex-col ">
    <h1 className="font-bold text-[#05004E]  text-[12px]">Reality Sales</h1>
    <h1 className="text-[#737791] text-[10px]">Global</h1>
</div>
<div className="pl-8">
    <h1 className="text-[#27AE60]">8.823</h1>
</div>
      </div>
      <div className="flex flex-row gap-5 pt-3">
        <div>
            <img src={ava1}/>
        </div>
<div className="flex flex-col ">
    <h1 className="font-bold text-[#05004E]  text-[12px]">Target Sales</h1>
    <h1 className="text-[#737791] text-[10px]">Commercial</h1>
</div>
<div className="pl-8">
    <h1 className="text-[#FFA412]">12.122</h1>
</div>
      </div>
    </div>
  );
};

export default TargetVs;
