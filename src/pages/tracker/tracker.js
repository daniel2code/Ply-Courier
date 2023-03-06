import React, { useState } from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import { useLocation  } from "react-router-dom";
import MapView from "./mapContainer";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import TrackerDetails from "./trackerDetails";

const Tracker = () => {
  const [openModal, setOpenModal] = useState(false);

  const location = useLocation().state

  console.log(location[0])

  const handleCloseModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="">
      {openModal && (
        <div className="fixed z-10  w-full">
          <TrackerDetails closeModal={handleCloseModal} trackDetails={location[0]} />
        </div>
      )}
      <Navbar />
      <div className="bg-[#2c234d] w-full min-h-[100vh] flex justify-center px-[5%] py-[20px]">
        <div className="flex justify-center items-center flex-col w-full">
          <h2 className="text-[40px] text-[#ff5f13] font-semibold">
            Status Trackers
          </h2>
          <p className="text-white mt-1">
            For tracking the progress of the delivery of a product or service.
            Does not motivate users to take action.
          </p>

          <div className="bg-[#fff] rounded w-full mt-[70px] max-w-[1340px]">
            <div className="flex justify-between p-5">
              <div>
                <h3 className="font-bold text-[18px]">
                  Your items has been dispatched
                </h3>
                <p className="text-[15px] text-gray-500 mt-2">
                  Expected Delivery date: 17 December 2022
                </p>
              </div>

              <button
                className="border border-[#ff5f13] font-medium px-3 rounded"
                onClick={handleCloseModal}
              >
                Tracking details
              </button>
            </div>
            <br />
            <MapView />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tracker;
