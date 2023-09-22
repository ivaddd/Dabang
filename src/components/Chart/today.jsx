import React from "react";
import icon from './Icon.png'
import ic from './Export Icon.png'
const TodaySales = () => {
  return (
    <div className="p-5 bg-white border border-[#F8F9FA] rounded-xl  shadow-md font-sans flex flex-col gap-4  lg:col-span-6 ">
      <div className="flex items-start justify-between">
        <div className=" ">
          <h1 className="font-bold text-[#05004E] text-lg mb-3">Today Sales</h1>
          <p className='text-[#737791]'>Sales Summary</p> 
        </div>
        <div className="flex flex-row border px-3 py-1 rounded-md gap-1">
<img src={ic} alt="" className="bg-cover" />
        <button className="text-[#0F3659]">Export</button>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 pr-4 gap-10 pt-16">
        <div className="bg-[#FFE2E5] w-[180px] h-[184px]  rounded-xl  p-2">
          <img src={icon} alt="" />
          <h1 className="text-xl font-bold py-2">$1k</h1>
          <h1 className="py-3  font-medium">Total Sales</h1>
          <h1 className="text-[#4079ED] font-sans">+8% from yesterday</h1>
        </div>
        <div className="bg-[#FFF4DE] w-[180px] h-[184px]  rounded-xl  p-2">
          <img src={icon} alt="" />
          <h1 className="text-xl font-bold py-2">300</h1>
          <h1 className="py-3  font-medium">Total Sales</h1>
          <h1 className="text-[#4079ED] font-sans">+8% from yesterday</h1>
        </div>
        <div className="bg-[#DCFCE7] w-[180px] h-[184px] rounded-xl  p-2">
          <img src={icon} alt="" />
          <h1 className="text-xl font-bold py-2">5</h1>
          <h1 className="py-3  font-medium">Total Sales</h1>
          <h1 className="text-[#4079ED] font-sans">+8% from yesterday</h1>
        </div>
        <div className="bg-[#F3E8FF] w-[180px] h-[184px] rounded-xl py-2  p-2">
          <img src={icon} alt="" />
          <h1 className="text-xl font-bold py-2">8</h1>
          <h1 className="py-3  font-medium">Total Sales</h1>
          <h1 className="text-[#4079ED] font-sans">+8% from yesterday</h1>
        </div>
      </div>
    </div>
  );
};

export default TodaySales;