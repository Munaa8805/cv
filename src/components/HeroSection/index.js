import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP
} from "./HeroElements";
import Video from "../../video/video.mp4";
const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Фронтэнд хөгжүүлэгч</HeroH1>
        <HeroP>
          HTML, CSS, Javascript, ReactJS програмчлалын хэлний туршлагатай.
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
