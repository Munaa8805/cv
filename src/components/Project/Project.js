import React from "react";
import {
  Container,
  ContainerWrapper,
  ContainerCard
} from "../ContainerElement";
import {
  Title,
  Description,
  Image,
  ContainerDiv,
  ContainerLink,
  MainTitle
} from "./ProjectElements";
import { projects } from "../../jobs";
const Project = () => {
  return (
    <Container bg="#010606" id="project">
      <MainTitle>Хэрэгжүүлсэн төслүүд</MainTitle>
      <ContainerWrapper number={2}>
        {projects.map((item) => (
          <ContainerCard key={item.id}>
            <Image src={item.image} />
            <ContainerDiv>
              <Title>{item.name}</Title>
              <Description>{item.technology}</Description>
              <ContainerLink>
                <a href={item.link} target="_blank">
                  Вебийн холбоос
                </a>
              </ContainerLink>
              <ContainerLink>
                <a href={item.githubRepo} target="_blank">
                  Github repository холбоос
                </a>
              </ContainerLink>
            </ContainerDiv>
          </ContainerCard>
        ))}
      </ContainerWrapper>
    </Container>
  );
};

export default Project;
