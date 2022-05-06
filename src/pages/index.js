import React, { useState } from "react";
import Navbar from "../components/Navbar/index";
import Sidebar from "../components/SideBar/index";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";
import Services from "../components/Services";
import Program from "../components/Services/program";
import Footer from "../components/Footer";
import Education from "../components/Education/Education";
import Project from "../components/Project/Project";
import Course from "../components/Course/Course";
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
      <Course />
      <Program />
      <Services />
      <Education />
      <Project />
      <Footer />
    </>
  );
};

export default Home;
