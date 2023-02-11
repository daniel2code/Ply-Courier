import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import AboutSection from "../home/about/about";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="w-full flex justify-center">
        <div className={`w-[100%] flex justify-center items-center wrapper`}>
          <h2 className="text-white text-[30px] sm:text-[40px] font-bold">
            About Us
          </h2>
        </div>
      </div>
      <div className="my-[80px]" >
        <AboutSection />
      </div>
      <Footer />
    </>
  );
};

export default About;
