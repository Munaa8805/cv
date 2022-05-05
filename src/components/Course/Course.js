import React from "react";
import { Container, ContainerWrapper } from "../ContainerElement";
import { Title, Subtitle, Description, Wrapper, Image } from "./courseElements";
import grade from "../../images/grade.jpg";
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
    </Container>
  );
};

export default Course;
