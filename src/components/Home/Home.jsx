import React from "react";

import AboutPage from "./About";
import ServicesSection from "./ServiceSection";
import SustainabilitySection from "./Sustainability";
import GetInTouchPage from "./GetInTouch";
import Footer from "./Footer";
import HeroManager from "./HeroMain";

// import HeroSection from "./Hero";

const Home = () => {
  return <div>
          
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
