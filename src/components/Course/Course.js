import React from "react";
import { Container, ContainerWrapper } from "../ContainerElement";
import {
  Title,
  Subtitle,
  Description,
  Wrapper,
  Image,
  LogoWrapper,
  LogoImage
} from "./courseElements";
import grade from "../../images/grade.jpg";
import { Logos } from "../../jobs";
const Course = () => {
  return (
    <Container id="education">
      <ContainerWrapper number={2}>
        <Wrapper>
          <Title>БОЛОВСРОЛ</Title>
          <Subtitle>МУИС-ГГФ & МУИС-ХШИУС</Subtitle>
          <Description>
            Монгол Улсын Их Сургуулын Газарзүй-Геологийн факультетэд 2004-2008
            онуудад суралцаж <b>Геологич</b> мэргэжлээр баклавр зэрэг эзэмшсэн.
          </Description>
          <Description>
            2019 онд Монгол Улсын Их Сургуулын бүрэлдэхүүн сургууль болох
            Хэрэглээний Шинжлэх Ухаан Инженерчлэлийн сургуулийн Мэдээлэл,
            компьютерийн ухааны тэнхимд <b>Програм хангамж</b> мэргэжилээр
            суралцаж байна.
          </Description>
        </Wrapper>
        <Wrapper>
          <Image src={grade} alt="grade" />
        </Wrapper>
      </ContainerWrapper>
      <ContainerWrapper number={1}>
        <Wrapper>
          <Title style={{ marginTop: "2rem" }}>Програмчлалын мэдлэг</Title>
          <LogoWrapper>
            {Logos.map((item) => (
              <Wrapper key={item.id}>
                <Subtitle>{item.name}</Subtitle>
                {/* <Description>{item.level}</Description> */}
                <LogoImage alt={item.name} src={item.logo} />
              </Wrapper>
            ))}
          </LogoWrapper>
        </Wrapper>
      </ContainerWrapper>
    </Container>
  );
};

export default Course;
