import { BadgeDollarSign, CalendarHeart, HandHeart, Users } from "lucide-react";
import React from 'react';

const Community2 = () => {
  return (
    <section className="bg-[#F5F7FA] w-full h-auto lg:h-[416px] flex flex-col lg:flex-row mt-4 p-4 lg:p-0">
      {/* Left side with title and description */}
      <div className="w-full lg:w-1/2 h-full flex justify-center items-center flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-[30px] md:text-[40px] lg:text-[45px] font-bold text-[#4D4D4D] leading-tight">
            Helping a local <br />
            <span className="text-[#24C6AB]">business reinvent itself</span>
          </h1>
          <p className="text-[#717171] mt-5 text-sm md:text-base lg:text-lg">
            We reached here with our hard work and dedication
          </p>
        </div>
      </div>

      {/* Right side with stats */}
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-start p-4 lg:p-8">
        <div className="grid grid-cols-2  md:grid-cols-2 gap-4 md:m-20 w-full">
          {/* Statistic 1 */}
          <div className="p-4 flex items-center">
            <Users size={30} className="text-[#24C6AB] mr-4" />
            <div className="flex flex-col">
              <h1 className="text-[24px] md:text-[30px] font-bold text-gray-700">2,245,341</h1>
              <p className="text-[12px] md:text-[14px] text-[#717171]">Members</p>
            </div>
          </div>

          {/* Statistic 2 */}
          <div className="p-4 flex items-center">
            <HandHeart size={30} className="text-[#24C6AB] mr-4" />
            <div className="flex flex-col">
              <h1 className="text-[24px] md:text-[30px] font-bold text-gray-700">46,328</h1>
              <p className="text-[12px] md:text-[14px] text-[#717171]">Clubs</p>
            </div>
          </div>

          {/* Statistic 3 */}
          <div className="p-4 flex items-center">
            <CalendarHeart size={30} className="text-[#24C6AB] mr-4" />
            <div className="flex flex-col">
              <h1 className="text-[24px] md:text-[30px] font-bold text-gray-700">828,867</h1>
              <p className="text-[12px] md:text-[14px] text-[#717171]">Event Bookings</p>
            </div>
          </div>

          {/* Statistic 4 */}
          <div className="p-4 flex items-center">
            <BadgeDollarSign size={30} className="text-[#24C6AB] mr-4" />
            <div className="flex flex-col">
              <h1 className="text-[24px] md:text-[30px] font-bold text-gray-700">1,926,436</h1>
              <p className="text-[12px] md:text-[14px] text-[#717171]">Payments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community2;
