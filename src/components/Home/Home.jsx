import React from "react";
import Navbar from "../Navbar/Navbar";
import AboutPage from "./About";
import ServicesSection from "./ServiceSection";
import SustainabilitySection from "./Sustainability";
import GetInTouchPage from "./GetInTouch";
import Footer from "./Footer";
import HeroManager from "./HeroMain";

// import HeroSection from "./Hero";

const Home = () => {
  return <div>
          <Navbar/>
          {/* <HeroSection /> */}
          
          <HeroManager />
          <AboutPage />
          <ServicesSection />
          <SustainabilitySection />
          <GetInTouchPage />
          <Footer />
  </div>;
};

export default Home;
