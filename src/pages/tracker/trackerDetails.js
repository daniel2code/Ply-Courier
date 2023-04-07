import React from "react";
import { numberFormat } from "../../utils/numberFormat";
import moment from "moment";

const TrackerDetails = ({ closeModal, trackDetails }) => {
  console.log(trackDetails);

  const dateString = trackDetails?.date;
  const formattedDate = moment(dateString).format("MMMM DD, YYYY");

  return (
    <div className="w-full h-screen bg-[#00000080] flex justify-center items-center ">
      <div className="rounded bg-[#fff] w-full max-w-[600px]  p-4">
        <div className="border border-x-0 border-t-0 flex justify-between items-start border-b-gray-300">
          <div>
            <p className="text-[15px]">
              Order ID: <b>{trackDetails?.orderNo}</b>
            </p>
            <p className="text-[15px] mt-[5px] mb-3">
              Arrival Date: <b>{formattedDate}</b>
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
            <h2 className="text-[21px] font-medium">{trackDetails?.product}</h2>
            <p className="my-[6px]">Qty: 1</p>
            <p className="text-[21px]">
              ${numberFormat(+trackDetails?.amount)}
            </p>
          </div>

          <div className="w-1/2">
            <div className="w-full">
              <img
                src={trackDetails?.photo}
                className="w-full h-auto max-h-[200px] "
              />
            </div>
          </div>
        </div>
        <p className="text-[#ff5f13] text-[16px] font-bold mt-5">
          Tracking Status
        </p>
        <div className="w-full flex justify-center">
          <div className="w-[100%] h-[8px] bg-gray-400 mt-2">
            <div
              className={`${
                trackDetails?.status.toLowerCase() === "dispatched"
                  ? "w-[33%]"
                  : trackDetails?.status.toLowerCase() === "shipped"
                  ? "w-[66%]"
                  : trackDetails?.status.toLowerCase() === "arrived"
                  ? "w-[100%]"
                  : "w-[0%]"
              } h-[8px] bg-[#90EE90]`}
            ></div>
          </div>
        </div>
        <div className="flex justify-between mt-1">
          <p className="text-[14px] text-gray-700">Placed</p>
          <p className="text-[14px] text-gray-700">Shipped</p>
          <p className="text-[14px] text-gray-700">Delivered</p>
        </div>
      </div>
    </div>
  );
};

export default TrackerDetails;
