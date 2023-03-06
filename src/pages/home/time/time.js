import React from "react";
import { BsClock, BsTelephone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

const Time = () => {
  return (
    <div className="w-full px-[5%] py-[40px] flex justify-center mb-[70px] bg-[#f9f9f9]">
      <div className="w-full max-w-[1300px]">
        <div className="flex justify-between flex-wrap">
          <div className="w-full sm:w-[50%] md:w-[33%] my-[20px]">
            <div className=" flex ">
              <div className="">
                <BsTelephone size={40} color="#f15f22" />
              </div>
              <div className="ml-[20px]">
                <p className="text-[#677294]">Call Us Anytime</p>
                <span className="text-[18px] font-semibold">
                  + (123) 1800-567-8990
                </span>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[50%] md:w-[33%] my-[20px]">
            <div className="flex">
              <div className="">
                <BsClock size={40} color="#f15f22" />
              </div>
              <div className="ml-[20px]">
                <p className="text-[#677294]">Sunday CLOSED</p>
                <span className="text-[18px] font-semibold">
                  Mon - Sat 8.00 - 18.00
                </span>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[50%] md:w-[33%] my-[20px]">
            <div className="flex">
              <div className="">
                <GoLocation size={40} color="#f15f22" />
              </div>
              <div className="ml-[20px]">
                <p className="text-[#677294]">Columbia, SC 29201</p>
                <span className="text-[18px] font-semibold">
                  USA, New York - 10620
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;
