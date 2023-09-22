import React from 'react';
import { Visitor } from './Visitor';

const VisitorIn = () => {
    return (
        <div className=" bg-white border border-[#F8F9FA] rounded-xl  p-5 shadow-md font-sans lg:col-span-4 ">
                <h5 className="font-bold text-[#05004E] text-lg mb-3 ">
                Visitor Insights
                </h5>
            <Visitor/>
        </div>
    );
}

export default VisitorIn;
