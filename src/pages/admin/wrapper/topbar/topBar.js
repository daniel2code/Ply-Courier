import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiMenu } from "react-icons/hi";

const TopBar = ({ handleOpenMenu }) => {
  return (
    <div className="bg-[#000] px-[2%] w-full h-[70px] text-[#fff] items-center flex justify-between">
      <div className="flex items-center">
        <p className="text-[30px] font-semibold">Admin</p>
        <p className="text-[17px] ml-6 hidden md:flex">
          Courier Management System
        </p>
      </div>
      <div>
        <div className="items-center gap-x-3 hidden md:flex">
          <FaUserCircle size={23} color="white" />
          <p className="text-white">Administrator</p>
          <MdOutlineKeyboardArrowDown size={25} color="white" />
        </div>

        <div className="flex md:hidden">
          <HiMenu size={30} onClick={handleOpenMenu} />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
