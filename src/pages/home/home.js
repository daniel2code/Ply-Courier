import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Hero from "./hero/hero";
import Services from "./serices/services";
import About from "./about/about";

const home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Footer />
    </div>
  );
};

export default home;
