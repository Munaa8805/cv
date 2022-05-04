import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesH2,
  ServicesP
} from "./EducationElements";

import { trainingData } from "../../jobs";
const Program = () => {
  return (
    <ServicesContainer id="training">
      <ServicesH1>Онлайн сургалт</ServicesH1>
      <ServicesWrapper>
        {trainingData.map((item) => (
          <ServicesCard key={item.id}>
            <ServicesH2>{item.company}</ServicesH2>
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
