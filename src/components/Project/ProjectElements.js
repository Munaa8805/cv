import styled from "styled-components";

export const MainTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: #fff;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;
export const Title = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
`;
export const ContainerDiv = styled.div`
  margin: 1.5rem;
`;
export const ContainerLink = styled.div`
  margin: 1rem 0;
  a {
    font-size: 1rem;
    color: black;
    &:link {
      text-decoration: none;
      color: "black";
    }

    &:visited {
      text-decoration: none;
      color: "black";
    }

    &:hover {
      text-decoration: underline;
    }

    &:active {
      text-decoration: underline;
    }
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 350px;
`;
