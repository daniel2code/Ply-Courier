import React, { useState, useRef } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsTwitter } from "react-icons/bs";
import { IoLogoGoogleplus } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../../assets/img/logo/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef();

  const handleOpenMenu = () => {
    setMenuOpen((prev) => !prev);
    menuRef.current.style.display = menuOpen ? "flex" : "none";
  };

  return (
    <header>
      {/* <!-- Header Start --> */}
      <div className="w-full flex justify-center py-3 bg-[#000c20] px-[5%] relative">
        <div className="w-full max-w-[1300px]">
          <div className="w-full hidden md:flex">
            <div className="w-full flex justify-center border-b pb-2 border-b-[#7b8693]">
              <div className="flex max-w-[1340px] justify-between w-full">
                <div className="flex">
                  <ul className="flex gap-x-[30px]">
                    <li className="text-[15px] text-[#7b8693]">
                      Phone: +99 (0) 101 0000 888
                    </li>
                    <li className="text-[15px] text-[#7b8693]">
                      Email: noreply@yourdomain.com
                    </li>
                  </ul>
                </div>
                <div className="">
                  <ul className="flex gap-x-[20px]">
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

          <div className="w-full py-3 pt-4">
            <div className="w-full flex justify-center items-center">
              <div className="flex max-w-[1300px] justify-between w-full">
                {/* <!-- Logo --> */}
                <div className="">
                  <img src={Logo} alt="" />
                </div>

                <div
                  className="md:flex items-center gap-x-[25px] mobile-menu hidden"
                  ref={menuRef}
                >
                  {/* <!-- Main-menu --> */}
                  <div className="w-full md:flex flex-col hidden">
                    <div className="flex md:hidden justify-end">
                      <AiOutlineClose
                        className="flex md:hidden cursor-pointer"
                        size={33}
                        color="#f15f22"
                        onClick={handleOpenMenu}
                      />
                    </div>

                    <nav className="flex">
                      <ul id="" className="flex gap-x-[20px] menu-box">
                        <li className="text-[#7b8693] menu text-[15px]">
                          <Link to="/">Home</Link>
                        </li>
                        <li className="text-[#7b8693] menu text-[15px]">
                          <Link to="/about">About</Link>
                        </li>
                        <li className="text-[#7b8693] menu text-[15px]">
                          <Link to="/service">Services</Link>
                        </li>
                        <li className="text-[#7b8693] menu text-[15px]">
                          <Link to="">Blog</Link>
                        </li>
                        <li className="text-[#7b8693] menu text-[15px]">
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </nav>
                    {/* <!-- Header-btn --> */}
                    {/* <button className="py-3 px-6 font-semibold text-white bg-[#f15f22] rounded ml-4 menu-btn">
                      Get A Qoue
                    </button> */}
                  </div>
                </div>

                <RiMenu3Fill
                  className="flex md:hidden cursor-pointer"
                  size={33}
                  color="#f15f22"
                  onClick={handleOpenMenu}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header End --> */}
    </header>
  );
};

export default Navbar;
