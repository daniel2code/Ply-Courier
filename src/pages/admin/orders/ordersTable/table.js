import React from "react";
import "./table.css";

const Table = ({ handleOpenForm }) => {
  return (
    <div className="table_box w-full">
      <div className="flex justify-between py-3 px-4 flex-col-reverse sm:flex-row gap-y-4">
        <button
          className="text-sm bg-black text-white px-5 py-2 rounded cursor-pointer"
          onClick={handleOpenForm}
        >
          Create Order
        </button>

        <div className="flex items-center gap-x-[15px] flex-wrap gap-y-3">
          <input
            type="text"
            className="input px-2 py-2 rounded w-full sm:w-[180px] outline-none"
            placeholder="Search Order"
          />
          <select className="input bg-transparent px-2 py-2 w-full sm:w-[180px] rounded outline-none">
            <option>All</option>
            <option>Completed</option>
            <option>Pending</option>
            <option>Failed</option>
          </select>
        </div>
      </div>

      <div className="w-full overflow-auto ">
        <div className="flex t_Head_box mt-7 px-3 py-3 w-[640px] sm:w-full">
          <p className="text-[15px] font-bold w-[17%]">Product</p>
          <p className="text-[15px] font-bold w-[27%]">Order No</p>
          <p className="text-[15px] font-bold w-[19%]">Location</p>
          <p className="text-[15px] font-bold w-[17%]">Status</p>
          <p className="text-[15px] font-bold w-[17%]">Issued Date</p>
        </div>

        {[...Array(10)].map(() => {
          return (
            <div className="flex t_body_box px-3 py-4 w-[640px] sm:w-full">
              <p className="text-[13px] w-[17%]">Leather Shoe</p>
              <p className="text-[13px] w-[27%]">34687900735</p>
              <p className="text-[13px] w-[19%]">Germany</p>
              <p className="text-[13px] w-[17%]">Completed</p>
              <p className="text-[13px] w-[17%]">21/05/2022</p>
            </div>
          );
        })}
      </div>

      <div className="mt-5 px-3 flex justify-between mb-2">
        <p className="text-gray-400">Showing 1 to 10 of 200 entries</p>
        <div className="flex gap-x-7">
          <div className="bg-gray-100 px-2 py-1 rounded"> {`<`} </div>
          <div className="bg-gray-100 px-2 py-1 rounded"> {`>`} </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
