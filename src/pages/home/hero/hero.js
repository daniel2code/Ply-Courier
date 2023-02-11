import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="hero-wrap w-full flex items-center justify-center px-[5%]">
        {/* <!-- Single Slider --> */}
        <div className="max-w-[1300px] w-full">
          <div className="">
            <div className="">
              <div className="">
                <div className="">
                  <h1 className="md:text-[70px] text-[40px] leading-[45px] text-white font-extrabold md:leading-[75px]">
                    Safe & Reliable{" "}
                    <span className="text-[#f15f22]">Logistic</span> <br />{" "}
                    Solutions!
                  </h1>
                </div>
                {/* <!--Hero form --> */}
                <form action="#" className="mt-[40px] flex">
                  <input
                    type="text"
                    placeholder="Your Tracking ID"
                    className="bg-white w-full max-w-[500px] h-[55px] pl-3 outline-none rounded-l-lg"
                  />
                  <button className="h-[55px] bg-[#f15f22] text-white font-semibold px-[20px] rounded-r-lg">
                    Track & Trace
                  </button>
                </form>
                {/* <!-- Hero Pera --> */}
                <div className="">
                  <p className=" text-white mt-[20px] text-[17px] ">
                    <i>For order status inquiry</i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
