import React from "react";
import Bg from "../../../assets/img/gallery/about2.png";
import { Link, useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();

  return (
    <div className="w-full px-[5%] py-7 flex justify-center mb-[70px]">
      <div className="w-full max-w-[1300px]">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-[57%]">
            <div className="about-caption mb-50">
              {/* <!-- Section Tittle --> */}
              <div className="section-tittle mb-35">
                <span className="text-[#f15f22] font-semibold">
                  About Our Company
                </span>
                <h2 className="text-[25px] lg:text-[35px] font-semibold w-full lg:w-[70%] mt-5">
                  Safe Logistic & Transport Solutions That Saves our Valuable
                  Time!
                </h2>
              </div>
              <p className="text-[15px] mt-[40px] w-full lg:w-[70%] text-gray-600">
                At Ply Logistics, we're dedicated to providing safe, reliable,
                and efficient logistics and transportation solutions to help
                businesses like yours save valuable time and resources. With
                years of experience in the industry, we understand the unique
                challenges that come with managing logistics and transportation,
                and we're committed to delivering customized solutions that meet
                your specific needs.
              </p>

              <p className="text-[15px] w-full lg:w-[70%] text-gray-600 mt-[20px]">
                If you're looking for a logistics and transportation partner
                that you can trust, look no further than our company. Contact us
                today to learn more about our services and how we can help you
                save time and resources while growing your business.
              </p>
              {location.pathname !== "/about" && (
                <button className="py-4 mt-[40px] px-8 font-thin text-white bg-[#f15f22] rounded">
                  <Link to="/about">More About Us</Link>
                </button>
              )}
            </div>
          </div>

          <div className="W-full lg:w-[35%] mt-[50px] lg:mt-0">
            {/* <!-- about-img --> */}

            <div className="w-full">
              <img src={Bg} alt="" className="w-full" />
            </div>
            <div className="about-back-img d-none d-lg-block">
              {/* <img src="assets/img/gallery/about1.png" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
