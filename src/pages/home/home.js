import React, { useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Hero from "./hero/hero";
import Services from "./serices/services";
import About from "./about/about";
import Time from "./time/time";
import Video from "./video/video";
import Testimonies from "./testimonies/testimonies";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Time />
      <Services />
      <Video />
      <About />
      <Testimonies />
      <Footer />
    </div>
  );
};

export default Home;
