import React from "react";
import Logo from "../../assets/img/logo/new-logo.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { IoLogoGoogleplus } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      {/* <!--? Footer Start--> */}
      <div className="w-full bg-[#121212] px-[5%] py-7 flex justify-center">
        <div className="w-full max-w-[1300px]">
          {/* <!-- footer Heading --> */}
          <div className="lg:flex justify-between w-full border border-b-gray-400 border-x-0 border-t-0 pb-[60px]">
            <div className="lg:w-[65%] w-full">
              <h2 className="text-white lg:text-[35px] text-[27px] font-semibold">
                We Understand The Importance Of <br className="hidden md:flex" />{" "}
                Approaching Each Work!
              </h2>
            </div>

            <div className="lg:w-[35%] w-full flex lg:justify-end mt-[25px] lg:mt-0">
              <span className="text-[#f15f22] lg:text-[35px] text-[27px] font-semibold">
                + (123) 1800-567-8990
              </span>
            </div>
          </div>

          {/* <!-- Footer Menu --> */}
          <div className="flex flex-col md:flex-row gap-y-[35px] justify-between pt-[60px]">
            <div className="md:w-[23%] w-full text-white">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4 className="text-[17px] font-semibold mb-[24px]">
                    COMPANY
                  </h4>
                  <ul className="gap-y-[8px] flex flex-col">
                    <li className="text-[15px] text-gray-400">
                      <Link to="/about">About Us</Link>
                    </li>
                    <li className="text-[15px] text-gray-400">
                      <Link to="/contact">Company</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className=" w-full md:w-[23%] text-white">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4 className="text-[17px] font-semibold mb-[24px]">
                    Open hour
                  </h4>
                  <ul className="gap-y-[8px] flex flex-col">
                    <li className="text-[15px] text-gray-400">
                      <a href="#">Monday 11am-7pm</a>
                    </li>
                    <li className="text-[15px] text-gray-400">
                      <a href="#"> Tuesday-Friday 11am-8pm</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className=" w-full md:w-[23%] text-white">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4 className="text-[17px] font-semibold mb-[24px]">Links</h4>
                  <ul className="gap-y-[8px] flex flex-col">
                    <li className="text-[15px] text-gray-400">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="text-[15px] text-gray-400">
                      <Link to="/about">About Us</Link>
                    </li>
                    <li className="text-[15px] text-gray-400">
                      <Link to="/service"> Our Services</Link>
                    </li>
                    <li className="text-[15px] text-gray-400">
                      <Link to="/shipment">Shipment & Tracking</Link>
                    </li>
                    <li className="text-[15px] text-gray-400">
                      <Link to="/contact"> Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[31%] text-white">
              <div className="mb-50">
                {/* <!-- logo --> */}
                <div className="footer-logo">
                  <a href="index.html">
                    {/* <img src="assets/img/logo/logo2_footer.png" alt=""
                  /> */}
                  </a>
                </div>

                <div className="flex flex-col gap-x-[15px]">
                  <img src={Logo} className="w-[200px]" />

                  <p className="text-[15px] text-gray-400 mt-4 w-[90%]">
                    Contact us today to learn more about our services and how we
                    can help you save time and resources while growing your
                    business.
                  </p>

                  <ul className="flex md:gap-x-[15px] gap-x-[25px]  mt-4">
                    <li>
                      <FaFacebookF color="#7b8693" />
                    </li>
                    <li>
                      <BsTwitter color="#7b8693" />
                    </li>
                    <li>
                      <FaLinkedinIn color="#7b8693" />
                    </li>
                    <li>
                      <IoLogoGoogleplus color="#7b8693" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Footer Bottom --> */}
          <div className="flex justify-center">
            <p className="text-[15px] text-gray-400 mt-[60px] pb-[40px]">
              Copyright &copy; {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
      {/* <!-- Footer End--> */}
    </footer>
  );
};

export default Footer;
