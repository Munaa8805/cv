import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from "./ServicesElements";

import { programJobs } from "../../jobs";
const Program = () => {
  return (
    <ServicesContainer id="experience">
      <ServicesH1>Програм хангамж</ServicesH1>
      <ServicesWrapper>
        {programJobs.map((item) => (
          <ServicesCard key={item.id}>
            <ServicesIcon src={item.logoImage} rel="noopener" />
            <ServicesH2>{item.name}</ServicesH2>
            <ServicesP>
              <span>Ажилласан мэргэжил:</span> {item.jobs}
            </ServicesP>

            <ServicesP>
              <span>Ажил үүрэг:</span> {item.jobDesc}
            </ServicesP>
            <ServicesP>
              <span>Хэрэглээний програм:</span> {item.useTechnology}
            </ServicesP>
            <ServicesP>
              <span>Ажилд орсон:</span> {item.durationStart}
            </ServicesP>
            <ServicesP>
              <span>Ажлаас гарсан:</span> {item.durationEnd}
            </ServicesP>
            <ServicesP>
              <span>Компаний дэлгэрэнгүй мэдээлэл: </span>
              <a href={item.companyLink} target="_blank">
                энд дарна уу
              </a>
            </ServicesP>
          </ServicesCard>
        ))}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Program;
