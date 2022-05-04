import React, { useState } from "react";
import Navbar from "../components/Navbar/index";
import Sidebar from "../components/SideBar/index";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";
import Services from "../components/Services";
import Program from "../components/Services/program";
import Footer from "../components/Footer";
import Education from "../components/Education/Education";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Program />
      <Services />
      <Education />
      <Footer />
    </>
  );
};

export default Home;
