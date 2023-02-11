import React from "react";
import Shoe from "../../assets/image/heels.png";

const TrackerDetails = ({ closeModal }) => {
  return (
    <div className="w-full h-screen bg-[#00000080] flex justify-center items-center ">
      <div className="rounded bg-[#fff] w-full max-w-[600px]  p-4">
        <div className="border border-x-0 border-t-0 flex justify-between items-start border-b-gray-300">
          <div>
            <p className="text-[15px]">
              Order ID: <b>859r4jrklelteu5roersfkn</b>
            </p>
            <p className="text-[15px] mt-[5px] mb-3">
              Placed On: <b>20 December 2022</b>
            </p>
          </div>

          <button
            className="border border-[#ff5f13] font-medium px-3 py-1 rounded"
            onClick={closeModal}
          >
            X
          </button>
        </div>

        <div className="flex justify-between mt-4">
          <div className="w-1/2">
            <h2 className="text-[21px] font-medium">
              Blade High Heels Sandals
            </h2>
            <p className="my-[6px]">Qty: 1</p>
            <p className="text-[21px]">$2,000</p>
          </div>

          <div className="w-1/2">
            <div className="w-full">
              <img src={Shoe} className="w-full h-auto max-h-[200px] " />
            </div>
          </div>
        </div>
        <p className="text-[#ff5f13] text-[18px] font-medium underline mt-5">
          Tracking Status
        </p>
        <div className="w-full flex justify-center">
          <div className="w-[100%] h-[8px] bg-gray-400 rounded mt-4">
            <div className="w-[60%] h-[8px] bg-[#ff5f13] rounded"></div>
          </div>
        </div>
        <div className="flex justify-between mt-1">
          <p className="text-[14px] text-gray-700">Placed</p>
          <p className="text-[14px] text-gray-700">Shipped</p>
          <p className="text-[14px] text-gray-300">Delivered</p>
        </div>
      </div>
    </div>
  );
};

export default TrackerDetails;
