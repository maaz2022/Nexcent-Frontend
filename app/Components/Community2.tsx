import { BadgeDollarSign, CalendarHeart, HandHeart, Users } from "lucide-react";
import React from 'react';

const Community2 = () => {
  return (
    <section className="bg-[#F5F7FA] w-full h-[416px] flex mt-4">
      <div className="w-1/2 h-full flex justify-center items-center flex-col">
        <div className="">
          <h1 className="text-[45px] font-bold text-[#4D4D4D] leading-tight">
            Helping a local <br />
            <span className="text-[45px] font-bold text-[#24C6AB]">business reinvent itself</span>
          </h1>
          <p className="text-[#717171] mt-5">We reached here with our hard work and dedication</p>
        </div>
      </div>

      <div className="w-1/2 h-full flex flex-col justify-center items-start p-4">
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="p-4 flex items-center">
            <Users size={40} className="text-[#24C6AB] mr-4" />
            <div className="flex flex-col">
              <h1 className="text-[30px] font-bold text-gray-700 ">2,245,341</h1>
              <p className="text-[14px] text-[#717171]">Members</p>
            </div>
          </div>
          <div className="p-4 flex items-center">
            <HandHeart size={40} className="text-[#24C6AB] mr-4" />
            <div className="flex flex-col">
              <h1 className="text-[30px] font-bold text-gray-700 ">46,328</h1>
              <p className="text-[14px] text-[#717171]">Clubs</p>
            </div>
          </div>
          <div className="p-4 flex items-center">
            <CalendarHeart size={40} className="text-[#24C6AB] mr-4" />
            <div className="flex flex-col">
              <h1 className="text-[30px] font-bold text-gray-700">828,867</h1>
              <p className="text-[14px] text-[#717171]">Event Bookings</p>
            </div>
          </div>
          <div className="p-4 flex items-center">
            <BadgeDollarSign size={40} className="text-[#24C6AB] mr-4" />
            <div className="flex flex-col">
              <h1 className="text-[30px] font-bold text-gray-700">1,926,436</h1>
              <p className="text-[14px] text-[#717171]">Payments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community2;
