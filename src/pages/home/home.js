import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Hero from "./hero/hero";
import Services from "./serices/services";
import About from "./about/about";
import Time from "./time/time";
import Testimonies from "./testimonies/testimonies";

const home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Time />
      <Services />
      <About />
      <Testimonies />
      <Footer />
    </div>
  );
};

export default home;
