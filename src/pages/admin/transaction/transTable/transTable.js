import React from "react";
import "../../orders/ordersTable/table.css";

const TransTable = () => {
  return (
    <div className="table_box w-full">
      <div className="flex justify-between py-3 px-4">
        <div className="flex items-center gap-x-[15px] w-full flex-col sm:flex-row gap-y-4">
          <input
            type="text"
            className="input px-2 py-2 rounded w-full sm:w-[180px] outline-none"
            placeholder="Search Order"
          />
          <select className="input bg-transparent w-full px-2 py-2 sm:w-[180px] rounded outline-none">
            <option>All</option>
            <option>Completed</option>
            <option>Pending</option>
            <option>Failed</option>
          </select>
        </div>
      </div>

      <div className="w-full overflow-auto ">
        <div className="flex t_Head_box mt-7 px-3 py-3 w-[540px] sm:w-full">
          <p className="text-[15px] font-bold w-[20%]">ID</p>
          <p className="text-[15px] font-bold w-[30%]">Amount</p>
          <p className="text-[15px] font-bold w-[25%]">Source</p>
          <p className="text-[15px] font-bold w-[25%]">Date</p>
        </div>
        {[...Array(10)].map(() => {
          return (
            <div className="flex t_body_box px-3 py-4 w-[540px] sm:w-full">
              <p className="text-[13px] w-[20%]">3465764</p>
              <p className="text-[13px] w-[30%]">20,000</p>
              <p className="text-[13px] w-[25%]">Paypal</p>
              <p className="text-[13px] w-[25%]">21/05/2022</p>
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

export default TransTable;
