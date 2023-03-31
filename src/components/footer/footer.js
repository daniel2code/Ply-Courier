import React from "react";
import Logo from "../../assets/img/logo/new-logo.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { IoLogoGoogleplus } from "react-icons/io";

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
                We Understand The Importance <br className="hidden md:flex" />{" "}
                Approaching Each Work!
              </h2>
            </div>

            <div className="lg:w-[35%] w-full flex lg:justify-end mt-[25px] lg:mt-0">
              <span className="text-[#f15f22] lg:text-[35px] text-[27px] font-semibold">
                + 1 212-683-9756
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
                      <a href="#">About Us</a>
                    </li>
                    <li className="text-[15px] text-gray-400">
                      <a href="#">Company</a>
                    </li>
                    <li className="text-[15px] text-gray-400">
                      <a href="#"> Press & Blog</a>
                    </li>
                    <li className="text-[15px] text-gray-400">
                      <a href="#"> Privacy Policy</a>
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
                    <li className="text-[15px] text-gray-400">
                      <a href="#"> Saturday 10am-6pm</a>
                    </li>
                    <li className="text-[15px] text-gray-400">
                      <a href="#"> Sunday 11am-6pm</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className=" w-full md:w-[23%] text-white">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4 className="text-[17px] font-semibold mb-[24px]">
                    RESOURCES
                  </h4>
                  <ul className="gap-y-[8px] flex flex-col">
                    <li className="text-[15px] text-gray-400">
                      <a href="#">Home Insurance</a>
                    </li>
                    <li className="text-[15px] text-gray-400">
                      <a href="#">Travel Insurance</a>
                    </li>
                    <li className="text-[15px] text-gray-400">
                      <a href="#"> Car Insurance</a>
                    </li>
                    <li className="text-[15px] text-gray-400">
                      <a href="#"> Business Insurance</a>
                    </li>
                    <li className="text-[15px] text-gray-400">
                      <a href="#"> Heal Insurance</a>
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
                    GThe trade war currently ensuing between te US anfd several
                    natxions around thdhe globe, most fiercely with.
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
