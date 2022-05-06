import styled from "styled-components";

export const Title = styled.h1`
  color: #01bf71;
  margin-bottom: 2rem;
`;
export const Subtitle = styled.h3`
  color: #000;
  margin-bottom: 1rem;
`;
export const Description = styled.p`
  color: #000;
  font-size: 1rem;
  margin-top: 1rem;
  line-height: 1.5;
  text-align: justify;
`;
export const Wrapper = styled.div``;
export const Image = styled.img`
  width: 100%;
`;
export const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  div {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;
    h3 {
      text-align: center;
    }
  }
`;
