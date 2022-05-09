import React from "react";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Column2,
  ImgWrap,
  Img
} from "./InfoElements";

const InfoSection = ({
  id,
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,

  alt,

  img
}) => {
  let content = `Миний бие 1985 онд төрсөн. Эхнэр 3-н хүүхдийн хамт Улаанбаатар хотод амьдардаг. 2008 онд Монгол Улсын Их Сургуулийг Геологич мэргэжлээр суралцаж төгссөн. 2019 оноос Монгол Улсын Их  Сургуулийн харьяа Хэрэглээний Шинжлэх Ухаан Инженерчлэлийн  сургуулийн Мэдээлэл, компьютерийн ухааны тэнхимд Програм хангамж  мэргэжлээр суралцаж байна.`;
  if (description.length > 0) {
    content = description;
  }
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle darkText={darkText}>{content}</Subtitle>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
