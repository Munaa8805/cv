import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesH2,
  ServicesP
} from "./EducationElements";
import { Image } from "../ContainerElement";

import { trainingData } from "../../jobs";
const Program = () => {
  return (
    <ServicesContainer id="training">
      <ServicesH1>Онлайн сургалт</ServicesH1>
      <ServicesWrapper>
        {trainingData.map((item) => (
          <ServicesCard key={item.id}>
            <Image src={item.company} height="50px" width="100px" />
            <ServicesP>
              <span>Сургалт :</span> {item.name}
            </ServicesP>
            <ServicesP>
              <span>Сургагч :</span> {item.trainer}
            </ServicesP>
            <ServicesP>
              <span>Технологи :</span> {item.technology}
            </ServicesP>
            <ServicesP>
              <span>Хугацаа :</span> {item.duration}
            </ServicesP>
          </ServicesCard>
        ))}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Program;
